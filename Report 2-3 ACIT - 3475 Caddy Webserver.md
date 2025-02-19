Name: Noppanat Sripan  
Student ID: A01373963  
Date: 2/17/2025

# Introduction

I initially developed and hosted my portfolio on a Raspberry Pi, but since the project requires cloud deployment, I later deployed it on an AWS EC2 instance. This setup allows my portfolio to be publicly accessible using a domain name, secured with HTTPS through Caddy. The steps below outline both my local and cloud deployment process.

# Running Portfolio Locally

To set up my portfolio on the Raspberry Pi, I followed these steps:

1. Developing the Portfolio on Windows
    - I created my portfolio using Next.js and React on Windows.
    - The portfolio runs locally on port 3000 during development.
    
    Screenshot: (Portfolio running on port 3000)  

    ![Alt text](assets/Pasted%20image%2020250218000315.png)


2. Uploading to GitHub
    - Once I finished development, I pushed the project to GitHub to deploy it on the Raspberry Pi.
3. Installing Dependencies on the Raspberry Pi
    - Downloaded required packages and dependencies:
        ```
        sudo apt install nodejs npm git  
        ```
    - Cloned the GitHub repository:
        ```
        git clone <repository-url>  
        ```
    - Installed project dependencies:
        ```
        npm install  
        ```
        
4. Running Next.js as a Service
    - Created a .service file to allow the website to run even after closing the terminal.

    Screenshot: (Service file setup)  
    ![Alt text](assets/Pasted%20image%20202502180001806.png)
    
5. Installing & Configuring Caddy
    - Installed Caddy using the following command:
        ```
        sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl  
        curl -1sLf 'https://dl.cloudsmith.io/public/caddy/testing/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-testing-archive-keyring.gpg  
        curl -1sLf 'https://dl.cloudsmith.io/public/caddy/testing/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-testing.list  
        sudo apt update  
        sudo apt install caddy  
        ```
    - Edited Caddyfile to reverse proxy port 3000 to port 80.
    
    Screenshot: (Caddyfile configuration)  
    ![Alt text](assets/Pasted%20image%2020250217235843.png)
    
6. Final Testing
    - Restarted Caddy and confirmed that the portfolio is now accessible on port 80.
    Screenshot: (Portfolio running locally on port 80)  
    ![Alt text](assets/Pasted%20image%20202502180004821.png)
    
# Running Portfolio Publicly

After setting up my portfolio locally, I made it accessible over the internet using AWS.

7. Hosting Portfolio on AWS EC2
    - Launched an Ubuntu EC2 instance on AWS.
    - Configured security groups to allow incoming HTTP (port 80) and HTTPS (port 443) traffic.
    - Connected to the instance via SSH:
        
        ```
        ssh -i my-key.pem ubuntu@<EC2-IP>  
        ```
    - Installed Node.js, NPM, and Caddy:
        
        ```
        sudo apt install nodejs npm git caddy  
        ```
    - Cloned my portfolio repository from GitHub:
        
        ```
        git clone <repository-url>  
        ```
    - Installed dependencies and started the project:
        
        ```
        npm install  
        ```
8. Registering a Domain
    - I registered a domain that I bought from Namecheap.
    Screenshot: (Domain registration)  
    ![Alt text](assets/Pasted%20image%2020250218013952.png)
9. Configuring DNS for Custom Domain
    - In my Namecheap account, I updated the DNS records to point tom.nsripan.me to my EC2 instance's public IP.
    - Created an A record:
        - Host: tom
        - Value:
        - TTL: Automatic
    - Verified the domain propagation using:
        ```
        nslookup tom.nsripan.me  
        ```
10. Updating Caddyfile for EC2 Deployment
    - Changed the Caddyfile configuration from port 80 to my domain name tom.nsripan.me.
    Screenshot: (Caddyfile configuration)  
    ![Alt text](assets/Pasted%20image%2020250218014329.png)
11. Final Testing
    - Verified that the portfolio is running publicly on the domain.
    Screenshot: (Portfolio running publicly)  
    ![Alt text](assets/Pasted%20image%2020250218011322.png)
    
# Conclusion

By setting up my portfolio on AWS EC2, I met the cloud deployment requirement of the project. My setup ensures remote access, HTTPS security, and a custom domain.

Note: No additional changes were needed in the Caddy configuration after the domain setup.
