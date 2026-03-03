import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white", mt: 10, py: 5 }}>
      <Grid 
        container 
        // Ye prop sections ko dur-dur phailane ke liye hai
        justifyContent="space-around" 
        // Columns ke beech gap ke liye
        spacing={4} 
        sx={{ px: 5 }}
      >
        
        {/* Section 1: Company */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" sx={{ pb: 3, fontWeight: 'bold' }}>Company</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button sx={{ color: 'gray', justifyContent: 'flex-start', p: 0 }}>About</Button>
            <Button sx={{ color: 'gray', justifyContent: 'flex-start', p: 0 }}>Blog</Button>
            <Button sx={{ color: 'gray', justifyContent: 'flex-start', p: 0 }}>Jobs</Button>
          </Box>
        </Grid>

        {/* Section 2: Solutions */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" sx={{ pb: 3, fontWeight: 'bold' }}>Solutions</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button sx={{ color: 'gray', justifyContent: 'flex-start', p: 0 }}>Marketing</Button>
            <Button sx={{ color: 'gray', justifyContent: 'flex-start', p: 0 }}>Analytics</Button>
          </Box>
        </Grid>

        {/* Section 3: Documentation */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" sx={{ pb: 3, fontWeight: 'bold' }}>Documentation</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button sx={{ color: 'gray', justifyContent: 'flex-start', p: 0 }}>Guides</Button>
            <Button sx={{ color: 'gray', justifyContent: 'flex-start', p: 0 }}>API Status</Button>
          </Box>
        </Grid>

        {/* Section 4: Legal */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" sx={{ pb: 3, fontWeight: 'bold' }}>Legal</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button sx={{ color: 'gray', justifyContent: 'flex-start', p: 0 }}>Privacy</Button>
            <Button sx={{ color: 'gray', justifyContent: 'flex-start', p: 0 }}>Terms</Button>
          </Box>
        </Grid>

       

      </Grid>
       {/* Bottom Line - Ye hamesha niche aayega kyunki ye xs={12} hai */}
        <Grid item xs={12} sx={{ mt: 8, borderTop: '1px solid #333', pt: 3 }}>
          <Typography variant="body2" align="center" sx={{ color: 'gray' }}>
            © 2026 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" align="center" sx={{ color: 'gray', mt: 1 }}>
            Made with ❤️ by Manish
          </Typography>
        </Grid>
    </Box>
  );
};

export default Footer;