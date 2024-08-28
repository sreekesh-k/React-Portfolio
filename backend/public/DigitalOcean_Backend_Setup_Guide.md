
# Step-by-Step Guide to Setting Up a Backend Server on DigitalOcean and Accessing It via a Custom Domain

## Step 1: Create a Droplet on DigitalOcean
1. Log in to your DigitalOcean account.
2. Create a new Droplet.
   - Choose an image: Ubuntu 22.04 (LTS) x64.
   - Choose a plan based on your needs.
   - Select a data center region.
   - Add SSH keys (recommended).
   - Finalize and create your Droplet.
3. Note the IP address of your Droplet.

## Step 2: SSH into Your Droplet
1. Open your terminal.
2. SSH into the Droplet using:
   ```bash
   ssh root@your_droplet_ip
   ```

## Step 3: Update and Upgrade Your Server
1. Once logged in, update the package lists and upgrade installed packages:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

## Step 4: Install Node.js and NPM
1. Install Node.js and npm using:
   ```bash
   sudo apt install nodejs npm -y
   ```
2. Verify the installation:
   ```bash
   node -v
   npm -v
   ```

## Step 5: Clone Your Backend Repository from GitHub
1. Install Git if it's not installed:
   ```bash
   sudo apt install git -y
   ```
2. Clone your GitHub repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git /var/www/your-backend
   ```

## Step 6: Install PM2 to Manage Your Node.js Application
1. Install PM2 globally using npm:
   ```bash
   sudo npm install pm2@latest -g
   ```
2. Navigate to your backend directory:
   ```bash
   cd /var/www/your-backend/backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start your backend application with PM2:
   ```bash
   pm2 start server.js --name your-app-name
   ```
5. Save the PM2 process list and set it to start on boot:
   ```bash
   pm2 save
   pm2 startup systemd
   ```

## Step 7: Install Nginx
1. Install Nginx:
   ```bash
   sudo apt install nginx -y
   ```

## Step 8: Configure Nginx as a Reverse Proxy
1. Open the Nginx configuration file for your domain:
   ```bash
   sudo nano /etc/nginx/sites-available/apis.sreekeshkprabhu.me
   ```
2. Add the following configuration:
   ```nginx
   server {
       listen 80;
       server_name apis.sreekeshkprabhu.me;

       location /portfolio/ {
           proxy_pass http://localhost:5000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }

       listen 443 ssl; # managed by Certbot
       ssl_certificate /etc/letsencrypt/live/apis.sreekeshkprabhu.me/fullchain.pem; # managed by Certbot
       ssl_certificate_key /etc/letsencrypt/live/apis.sreekeshkprabhu.me/privkey.pem; # managed by Certbot
       include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
       ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
   }
   ```
3. Enable the Nginx configuration:
   ```bash
   sudo ln -s /etc/nginx/sites-available/apis.sreekeshkprabhu.me /etc/nginx/sites-enabled/
   ```
4. Test the Nginx configuration:
   ```bash
   sudo nginx -t
   ```
5. Reload Nginx to apply the changes:
   ```bash
   sudo systemctl reload nginx
   ```

## Step 9: Obtain an SSL Certificate with Certbot
1. Install Certbot and the Nginx plugin:
   ```bash
   sudo apt install certbot python3-certbot-nginx -y
   ```
2. Obtain an SSL certificate:
   ```bash
   sudo certbot --nginx -d apis.sreekeshkprabhu.me
   ```
3. Follow the prompts to complete the setup.

## Step 10: Configure Your Domain DNS
1. Log in to your domain registrar (e.g., Namecheap).
2. Go to the DNS management page for your domain.
3. Add an A record:
   - **Host:** `apis`
   - **Value:** Your Droplet’s IP address
   - **TTL:** Automatic or 1 hour
4. Wait for the DNS changes to propagate.

## Step 11: Test Your Setup
1. Visit `http://apis.sreekeshkprabhu.me/portfolio` to ensure your backend is accessible.
2. Use HTTPS for a secure connection: `https://apis.sreekeshkprabhu.me/portfolio`.

## Step 12: Update and Deploy Changes
1. When you make changes to your backend code:
   - SSH into your Droplet.
   - Navigate to your backend directory:
     ```bash
     cd /var/www/your-backend/backend
     ```
   - Pull the latest changes:
     ```bash
     git pull origin main
     ```
   - Restart PM2 to apply changes:
     ```bash
     pm2 restart your-app-name
     ```
2. No need to restart Nginx unless you change its configuration.

That's it! Your backend should now be up and running, accessible through your custom domain, and managed easily with PM2 and Nginx.
