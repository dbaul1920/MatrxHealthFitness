# Deployment Guide — MATRX Health & Fitness Website

## Quick Start

This is a **static HTML website** with no build process required. Simply upload the files to your web server.

---

## Pre-Deployment Checklist

### 1. Content Verification
- [ ] All contact information is current
- [ ] Phone numbers are correct: (586) 232-3644
- [ ] Address is accurate: 16145 Leone Dr, Macomb, MI 48042
- [ ] Business hours are up to date
- [ ] All service descriptions are finalized
- [ ] Pricing is accurate on all relevant pages
- [ ] Team member photos are high-quality and approved
- [ ] Facility images are current

### 2. Links & Navigation
- [ ] All internal links are working
- [ ] External links (scheduling system, social media) are correct
- [ ] No broken links throughout the site
- [ ] Navigation menu is accurate
- [ ] Footer links point to correct pages

### 3. Forms & Integration
- [ ] Contact form endpoint configured (if using external service)
- [ ] Newsletter subscription form linked to email service
- [ ] Booking/scheduling system URL is current
- [ ] Form validation is working correctly
- [ ] Success/error messages are appropriate

### 4. Technical
- [ ] All images are loading correctly
- [ ] Fonts are displaying properly
- [ ] Mobile menu toggle works on phones
- [ ] Forms are responsive on all devices
- [ ] No console errors in browser dev tools

---

## Deployment Steps

### Option A: Traditional Web Host (Recommended for Non-Developers)

1. **Access Your Web Host Control Panel**
   - Log into cPanel, Plesk, or your host's dashboard
   - Navigate to File Manager

2. **Upload Files**
   - Navigate to your public HTML directory (`public_html/` or `www/`)
   - Upload all files maintaining the folder structure:
     ```
     public_html/
     ├── index.html
     ├── about-us.html
     ├── css/
     │   └── style.css
     ├── js/
     │   └── main.js
     ├── images/
     │   └── [all image files]
     └── [all other .html files]
     ```

3. **Verify Installation**
   - Visit your domain in a browser
   - Check that the homepage loads correctly
   - Test mobile view by resizing browser
   - Click through main navigation links

### Option B: Using FTP/SFTP

1. **Connect via FTP**
   - Use FileZilla, WinSCP, or similar FTP client
   - Enter host credentials provided by your web hosting company
   - Navigate to public HTML directory

2. **Upload All Files**
   - Drag and drop entire `matrx-site` folder contents
   - Ensure folder structure is preserved

3. **Set Permissions** (usually automatic)
   - HTML files: 644 (readable)
   - Directories: 755 (readable and executable)

### Option C: GitHub Pages (Free Hosting - No Custom Domain)

1. **Create GitHub Repository**
   - Go to github.com and create new repository
   - Name it: `matrx-site` or similar

2. **Upload Files**
   - Push all project files to the repository
   - Enable GitHub Pages in repository settings
   - Select "main" branch as source

3. **Access Your Site**
   - Site available at: `yourusername.github.io/matrx-site`
   - Custom domain setup available in settings

---

## SSL/HTTPS Certificate Setup

### Important: Always Use HTTPS
Your site should use HTTPS encryption, especially for forms.

**If Using cPanel Host:**
1. Go to AutoSSL section
2. Select AutoSSL certificate
3. Click "Auto SSL" - usually installs within 15 minutes

**If Using Manual Setup:**
- Most modern hosts offer free Let's Encrypt certificates
- Contact your hosting provider for setup instructions

---

## Domain Configuration

### Point Domain to New Server

**For nameserver changes:**
1. Log into your domain registrar account
2. Find DNS/Nameserver settings
3. Update nameservers to those provided by your web host
4. Wait 24-48 hours for changes to propagate

**For A-Record pointing:**
1. Get the IP address from your web host
2. Update A-record to point to the new IP
3. Test with: `nslookup yourdomain.com`

---

## Email Configuration

### Setting Up Business Email

**Option 1: Web Host Email**
- Use cPanel/Plesk to create email accounts
- Configure in Outlook, Gmail, or Apple Mail

**Option 2: Google Workspace**
1. Purchase Google Workspace plan
2. Update MX records to Google's values
3. Users access mail at mail.google.com

**Option 3: Professional Email Service**
- Recommended: Zoho Mail, ProtonMail, Microsoft 365
- Follow provider's setup instructions

---

## Post-Deployment Verification

### Functionality Testing

```
Visual Verification:
  ✓ All pages load without 404 errors
  ✓ Images display correctly
  ✓ Fonts render properly
  ✓ Colors match design specs
  ✓ Layout is responsive (test on phone)

Navigation Testing:
  ✓ Header navigation works
  ✓ Footer links work
  ✓ Mobile menu opens/closes
  ✓ Dropdown menus display

Forms Testing:
  ✓ Contact form submits
  ✓ Newsletter form works
  ✓ All inputs accept data
  ✓ Required fields validate

Mobile Testing:
  ✓ Responsive menu appears
  ✓ Text is readable (not zoomed out)
  ✓ Buttons are tap-friendly
  ✓ Images scale properly
  ✓ No horizontal scrolling
```

### Browser Compatibility Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome (Android)

---

## Analytics Setup (Recommended)

### Google Analytics 4

1. **Create/Sign into Google Analytics**
   - Go to analytics.google.com
   - Click "Create Property"

2. **Get Tracking Code**
   - Copy the provided tracking code

3. **Add to Website**
   - Add to `<head>` section of index.html (optional - adds to all pages)
   - Or add to header component if you have one

4. **Verify Installation**
   - Visit your site
   - Check Real-time reports in Analytics

---

## Backup Strategy

### Regular Backups (Important!)

**Create Backups:**
- Weekly full site backups (automatic if available from host)
- Keep local copies on your computer
- Store in cloud storage (Google Drive, Dropbox)

**Backup File Structure:**
```
backup-matrx-2025-02-06/
├── html-files/
├── css/
├── js/
├── images/
└── databases/ (if applicable later)
```

---

## Monitoring & Maintenance

### Weekly Checks
- Verify site loads correctly
- Check contact form submissions
- Review analytics for traffic patterns

### Monthly Checks
- Update any outdated information
- Check for broken links
- Review error logs (if available)
- Backup the site

### Yearly Tasks
- Review design and layout
- Update images if needed
- Refresh content
- Check for newer web standards

---

## Troubleshooting

### Site Not Loading
1. Check domain points to correct IP
2. Verify files uploaded to correct directory
3. Check browser cache (Ctrl+Shift+Delete)
4. Try different browser
5. Contact hosting provider

### Pages Show 404 Errors
1. Verify file names are correct (case-sensitive)
2. Check all files are uploaded
3. Ensure folder structure is preserved
4. Check .htaccess file (if using rewrites)

### Forms Not Working
1. Verify form backend is configured
2. Check console for JavaScript errors (F12 key)
3. Verify SSL certificate is valid
4. Contact email service provider

### Mobile Menu Not Working
1. Check JavaScript file is loaded
2. Clear browser cache
3. Test in different browser
4. Check console for errors

---

## Performance Optimization Tips

### Already Implemented:
- ✓ WebP images (smaller file sizes)
- ✓ Minimal CSS (no bloat)
- ✓ Minimal JavaScript (fast loading)
- ✓ Lazy loading ready
- ✓ Mobile-first responsive design

### Optional Future Enhancements:
- [ ] Enable gzip compression on server
- [ ] Use CDN for faster global delivery
- [ ] Add image lazy loading
- [ ] Implement caching headers
- [ ] Minify CSS/JS further

---

## Support & Questions

**For Web Hosting Issues:**
- Contact your web hosting provider's support

**For Website Issues:**
- Check browser console (F12 > Console tab)
- Verify all files are uploaded
- Test on different device/browser
- Review the PROTOTYPE_SUMMARY.txt file

---

## Important Notes

1. **No Database Required** - This is a static website
2. **No Build Process** - Deploy files as-is
3. **No Special Server Setup** - Works on any standard web host
4. **Fully Responsive** - Mobile, tablet, and desktop compatible
5. **SEO Ready** - Meta tags in place (add descriptions as needed)

---

**Deployment Date:** February 6, 2025
**Site Version:** 1.0
