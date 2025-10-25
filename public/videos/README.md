# Video Files

## How to Add Your Video

1. **Download your video from YouTube:**
   - Use a YouTube downloader tool (like yt-dlp, 4K Video Downloader, etc.)
   - Download in MP4 format for best compatibility
   - Recommended resolution: 1920x1080 (Full HD) or higher

2. **Rename and place the file:**
   - Rename your video file to: `hochzeit-fireworks.mp4`
   - Place it in this directory: `public/videos/hochzeit-fireworks.mp4`

3. **Video specifications:**
   - **Format**: MP4 (H.264 codec)
   - **Resolution**: 1920x1080 or higher
   - **Duration**: Any length (recommended 1-5 minutes)
   - **File size**: Keep under 50MB for web performance

## Current Video Configuration

The video player is configured to use:
- **File path**: `/videos/hochzeit-fireworks.mp4`
- **Player**: HTML5 video element
- **Features**: Autoplay, controls, loop, muted start
- **Responsive**: Adapts to all screen sizes

## Benefits of Local Video

✅ **No YouTube branding** - Clean, professional appearance  
✅ **Better performance** - Faster loading, no external dependencies  
✅ **Full control** - Custom controls, styling, and behavior  
✅ **No restrictions** - No YouTube terms of service limitations  
✅ **Offline capable** - Works without internet connection  

## Alternative: Keep YouTube Integration

If you prefer to keep the YouTube integration, change the `videoUrl` in `src/utils/constants.ts` back to:
```typescript
videoUrl: '_bpIyM5yHcM' // YouTube video ID
```

And the VideoPlayer will automatically use the YouTube iframe embed.

