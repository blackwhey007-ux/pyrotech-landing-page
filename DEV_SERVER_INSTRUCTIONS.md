# How to Run the Development Server

## Option 1: Double-Click Batch File (Easiest)
1. Find `start-dev-server.bat` in the project folder
2. Double-click it
3. Wait for "Local: http://localhost:5173/" to appear
4. Open your browser to that URL

## Option 2: Command Line
1. Open Command Prompt or PowerShell
2. Navigate to project folder: cd "C:\Users\Redemption\Downloads\samir 3"
3. Run: npm run dev
4. Open browser to http://localhost:5173/

## Troubleshooting
- If port 5173 is in use, the server will try 5174, 5175, etc.
- Look for the "Local: http://localhost:XXXX/" message
- Use that URL in your browser

## Testing Pricing Buttons
Once the server is running:
1. Open browser to the displayed URL
2. Hard refresh: Ctrl + Shift + R
3. Open console (F12)
4. Scroll to pricing section
5. Click any pricing button
6. Watch console for debug messages
7. Verify smooth scroll to contact form

