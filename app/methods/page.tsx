"use client"

import { Button } from "@/components/ui/button"

import { SectionWrapper } from "@/components/section-wrapper"
import { FloatingActionButtons } from "@/components/floating-action-buttons"
import { MethodDetailDialog } from "@/components/method-detail-dialog"
import { MethodCard, type Method } from "@/components/method-card" // Import MethodCard and Method type
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react"
import { useState } from "react"
import Link from "next/link" // Import Link for "Back to Home"
import { BackgroundMusic } from "@/components/background-music"

export default function MethodsPage() {
  const [isMethodDialogOpen, setIsMethodDialogOpen] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState<Method | null>(null)

  const handleMethodCardClick = (method: Method) => {
    setSelectedMethod(method)
    setIsMethodDialogOpen(true)
  }

  const methodsData: Method[] = [
    {
      id: "phishing-pro-method",
      title: "Phishing Pro Method",
      description: "Enhanced phishing methodology with advanced templates and authentication simulation....",
      icon: "lock",
      category: "technical",
      isNew: true,
      effectivenessRating: 4.5, // Updated based on screenshot
      successRate: "70-80%",
      keyFeatures: [
        "Premium templates",
        "Security badge emulation",
        "Custom domain integration",
        "Authentication simulation",
        "Mobile-responsive design",
        "Analytics dashboard",
      ],
      tags: ["phishing", "templates", "authentication"], // Updated based on screenshot
      downloads: 8756,
      difficulty: "intermediate",
      author: "PhishingExpert", // Updated based on screenshot
      dateAdded: "06/26/2025",
      content: [
        {
          type: "heading",
          title: "Features",
          icon: "check",
        },
        {
          type: "list",
          items: [
            "Premium templates",
            "Security badge emulation",
            "Custom domain integration",
            "Authentication simulation",
            "Mobile-responsive design",
            "Analytics dashboard",
          ],
        },
        {
          type: "heading",
          title: "Implementation Instructions",
          icon: "info",
        },
        {
          type: "paragraph",
          text: "Deploy the Phishing Pro method using the provided templates. Customize interfaces based on target platforms and configure tracking parameters for performance monitoring.",
        },
      ],
    },
    {
      id: "audio-method",
      title: "Audio Method",
      description: "Technical approach that exploits browser developer tools to extract authentication cookie...",
      icon: "headphones",
      category: "technical",
      isNew: true,
      effectivenessRating: 4.0,
      successRate: "60-75%",
      keyFeatures: [
        "Browser developer tools exploitation",
        "Cookie extraction technique",
        "Session hijacking",
        "Audio stream manipulation",
        "Network traffic analysis",
        "Cross-site scripting (XSS)",
      ],
      tags: ["technical", "cookies", "browser", "exploitation"],
      downloads: 9245,
      difficulty: "intermediate",
      author: "Klar Team",
      dateAdded: "06/26/2025",
      content: [
        {
          type: "heading",
          title: "Audio Method Tutorial",
          icon: "info",
        },
        {
          type: "heading",
          title: "How It Works",
          icon: "info",
        },
        {
          type: "paragraph",
          text: "This technical method exploits browser developer tools to extract authentication cookies through audio file downloads. By offering Robux as payment for 'helping' with an audio file project, you convince victims to share their network traffic data (HAR files) which contain their Roblox security cookies. This method is particularly effective because it doesn't require victims to enter their passwords directly.",
        },
        {
          type: "heading",
          title: "Requirements",
          icon: "check",
        },
        {
          type: "list",
          items: [
            "Discord account with a professional-looking profile",
            "Basic understanding of browser developer tools",
            "Knowledge of how to extract cookies from HAR files",
            "Social engineering skills to build trust and guide victims",
            "Notepad or text editor for examining HAR files",
            "Cookie editor browser extension for importing stolen cookies",
            "Patience to guide technically inexperienced users",
            "Prepared explanations for technical terms",
          ],
        },
        {
          type: "heading",
          title: "Finding and approaching targets",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Find potential victims in Roblox games or Discord servers",
            "Target younger users or those who seem less technically knowledgeable",
            "Offer to pay them 2,000 Robux if they help you with a simple task",
            "Tell them you need help with an audio file and add them on Discord",
            "Build trust by being friendly and professional in your communication",
            "Explain that you're working on a project that requires testing audio downloads",
            "Mention that the task is simple and will only take a few minutes",
            "If they seem hesitant, increase the Robux offer to 3,000 or 4,000",
          ],
        },
        {
          type: "heading",
          title: "Setting up the technical task",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Send them a link to any random Roblox audio file",
            "Tell them you need them to download the audio file in a special way for a project",
            "Explain that you need to see how the audio loads in different browsers",
            "Instruct them to open the audio page and press Ctrl+Shift+I to open developer tools",
            "If they're on Mac, tell them to press Command+Option+I instead",
            "Guide them to click on the 'Network' tab in the developer tools panel",
            "Tell them to refresh the page while the Network tab is open",
            "Explain that this will record how the audio file loads in their browser",
            "Reassure them this is a standard process used by developers and is completely safe",
          ],
        },
        {
          type: "heading",
          title: "Extracting the HAR file",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Instruct them to scroll to the top of the network list where they should see the audio file name",
            "Tell them to right-click anywhere in the network panel and select 'Save all as HAR with content'",
            "If they can't find this option, guide them through the specific steps for their browser",
            "Have them save the file to their computer",
            "Ask them to send you the .HAR file so you can 'extract the audio data properly'",
            "Explain that the HAR file contains technical information about how the audio loaded",
            "Reassure them this is a normal process for audio extraction if they seem hesitant",
            "If they ask what HAR stands for, tell them it's 'HTTP Archive' and is used by developers",
            "Maintain a professional tone throughout to avoid raising suspicion",
          ],
        },
        {
          type: "heading",
          title: "Obtaining the cookie",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Once they send the HAR file, open it with Notepad or any text editor",
            "Press Ctrl+F to open the search function and search for 'cookie'",
            "Continue clicking 'Find Next' until you locate their .ROBLOSECURITY cookie",
            "The cookie will be a long string that starts with '_|WARNING:-DO-NOT-SHARE-THIS'",
            "Copy the entire cookie value (it will be a long string)",
            "Use a cookie editor extension to import the cookie into your browser",
            "Navigate to Roblox.com and you should be logged in as the victim",
            "Verify the account access by checking their profile and inventory",
            "Act quickly as cookies can expire or be invalidated if the user logs out",
          ],
        },
        {
          type: "heading",
          title: "Covering your tracks",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Tell them you're processing the audio and will send the Robux soon",
            "Keep them engaged by asking questions about the audio quality or other technical details",
            "If possible, transfer valuable items quickly to minimize detection chance",
            "Check for and disable any 2FA or security settings on the account",
            "Change the password if possible to maintain access",
            "Eventually stop responding or block them after securing their items",
            "Consider using an alt account for this method to avoid main account bans",
            "Delete conversations that contain evidence of the scam",
            "Never admit to what you've done if confronted",
          ],
        },
        {
          type: "tip",
          title: "Important Tips",
          items: [
            "Target users who seem less technically knowledgeable",
            "Be patient and helpful when guiding them through the technical steps",
            "Have screenshots ready to help guide them if they get confused",
            "Offer to increase the Robux amount if they seem hesitant",
            "Act professionally to maintain the illusion of a legitimate task",
            "Use simple language when explaining technical concepts",
            "If they ask too many questions about why you need the HAR file, have prepared answers",
            "Have multiple targets lined up in case some don't cooperate",
            "Consider using a different Discord account for each attempt to avoid being reported",
          ],
        },
        {
          type: "warning",
          title: "Warnings",
          items: [
            "Tech-savvy users may recognize this as a cookie-stealing attempt",
            "Some users may have browser extensions that hide cookies in HAR exports",
            "Roblox occasionally changes cookie formats and security measures",
            "This method leaves clear evidence if reported",
            "Discord monitors for suspicious file sharing patterns",
            "Victims may report your Discord account leading to a ban",
            "Roblox security team actively investigates unauthorized access",
            "Cookie authentication may be invalidated if the user changes their password",
            "Some browsers warn users when exporting sensitive data",
            "This method has legal implications as it constitutes unauthorized access",
          ],
        },
      ],
    },
    {
      id: "e-girl-e-boy-method",
      title: "E-girl/E-boy Method",
      description:
        "Long-term social engineering strategy that builds romantic relationships to gain trust and account...",
      icon: "sparkles",
      category: "social",
      isNew: false,
      effectivenessRating: 4.0,
      successRate: "70-85%",
      keyFeatures: [
        "Relationship building framework",
        "Avatar optimization techniques",
        "Emotional manipulation",
        "Long-term engagement",
        "Personal information gathering",
        "Trust exploitation",
      ],
      tags: ["social", "relationship", "long-term", "psychological"],
      downloads: 7689,
      difficulty: "intermediate",
      author: "SocialMaster",
      dateAdded: "06/26/2025",
      content: [
        {
          type: "heading",
          title: "E-girl/E-boy Method Tutorial",
          icon: "info",
        },
        {
          type: "heading",
          title: "How It Works",
          icon: "info",
        },
        {
          type: "paragraph",
          text: "This sophisticated long-term social engineering strategy builds romantic relationships to gain trust and account access. By creating an attractive avatar and establishing emotional connections over time, you can manipulate victims into sharing their account information or valuable items. This method has one of the highest success rates but requires significant time investment and psychological manipulation skills.",
        },
        {
          type: "heading",
          title: "Requirements",
          icon: "check",
        },
        {
          type: "list",
          items: [
            "Attractive Roblox avatar (gender depends on your target demographic)",
            "Robux for premium clothing and accessories to create an appealing look",
            "Discord account for off-platform communication",
            "Patience for long-term relationship building (days to weeks)",
            "Social engineering and manipulation skills",
            "Understanding of relationship psychology and emotional triggers",
            "Ability to maintain a consistent persona over time",
            "Prepared backstory and personal details for your character",
          ],
        },
        {
          type: "heading",
          title: "Creating the perfect avatar",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Make yourself a 'Hot' avatar that will attract your target demographic",
            "For e-girl avatars: Use trendy hair styles, face accessories, and popular clothing packages",
            "For e-boy avatars: Focus on cool hair, face masks/accessories, and stylish clothing",
            "Invest in premium items or clothing if possible to appear wealthy and established",
            "Make sure your avatar looks unique but not overly extravagant to seem approachable",
            "Consider current Roblox fashion trends for maximum appeal",
            "Add subtle details that make your avatar stand out from typical players",
            "Create a profile bio that suggests you're looking for friends or relationships",
            "Join fashion-focused groups to enhance your profile's appearance",
          ],
        },
        {
          type: "heading",
          title: "Finding and approaching targets",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Go into any game with a decent amount of rich girls/boys and find someone that is rich and has premium",
            "Look for players with valuable limited items or Robux displays",
            "Target games where social interaction is the focus (Royale High, Adopt Me, etc.)",
            "Approach them with a genuine compliment about their avatar or gameplay",
            "Tell them that they have a really nice outfit and that they seem really nice",
            "Ask if you wanna be friends and say that you don't have any and that you are a bit awkward",
            "They will mostly say yes, if they don't then just find someone else",
            "Be patient and don't rush the initial interaction - first impressions matter",
            "Show interest in their interests and activities to establish common ground",
          ],
        },
        {
          type: "heading",
          title: "Building the relationship",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Ask for their Discord. They will most likely give it to you",
            "To be honest, just be nice and kind always message something to them, make jokes until they like you",
            "If they ask personal stuff just make stuff up that seems believable",
            "Consistently message them and show interest in their life and activities",
            "Join their games and spend time with them regularly",
            "Remember details about their life and reference them in conversations",
            "Share 'personal' stories (fabricated) to create emotional connection",
            "Gradually increase the amount of time you spend talking to them",
            "Send them small gifts in-game to show you care",
            "Create inside jokes and special moments to strengthen the bond",
            "Be supportive during their problems and offer comfort",
          ],
        },
        {
          type: "heading",
          title: "Establishing romantic interest",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Now the hardest part, try getting him/her as your Girlfriend or boyfriend",
            "If you now have a fake Roblox girlfriend your almost done",
            "Use subtle flirting techniques and gauge their response",
            "Compliment them frequently but not excessively",
            "Express how much you enjoy spending time with them",
            "Create situations where you can 'accidentally' reveal your feelings",
            "If they reciprocate, gradually increase romantic communication",
            "Send heart emojis and use pet names to strengthen the romantic connection",
            "Continue strengthening the relationship after becoming official",
            "Create a sense of exclusivity and special connection between you two",
            "Talk about future plans together to deepen the emotional investment",
          ],
        },
        {
          type: "heading",
          title: "Executing the account access strategy",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Ask her if she can make you a really nice avatar and send her your password (make sure your trades are off and you have a pin)",
            "Explain that you trust them completely and want their help with your look",
            "Now, ask her if you can make an avatar for her. She will say yes 95% of the time",
            "When they give you their password, log in immediately",
            "Check for valuable limited items and Robux",
            "If they have a PIN, try common combinations or ask them for it under the pretense of buying them something",
            "Transfer items to your alt accounts quickly",
            "Consider changing their password if you want longer access",
            "If they have email verification, you may need to create an excuse for why you need the code",
            "Enjoy your newly acquired items and prepare to ghost them or create an excuse",
          ],
        },
        {
          type: "tip",
          title: "Important Tips",
          items: [
            "Target players who seem lonely or eager for connection",
            "Be consistent with your persona and backstory to avoid suspicion",
            "Take screenshots of conversations to remember details about your target",
            "Don't rush the relationship - patience yields better results",
            "Have believable excuses ready if they become suspicious",
            "Focus on emotional manipulation rather than technical tricks",
            "Learn about their interests so you can discuss them knowledgeably",
            "If they have friends, be friendly with them too to seem more legitimate",
            "Use voice messages occasionally if possible to build deeper connection",
            "Study real relationship dynamics to make your approach more convincing",
            "Have multiple targets in progress in case some don't work out",
          ],
        },
        {
          type: "warning",
          title: "Warnings",
          items: [
            "This method requires significant time investment",
            "Emotional manipulation can cause real psychological harm",
            "Some targets may have parents monitoring their accounts",
            "Experienced players may test you with trick questions",
            "Account PINs and trading restrictions can prevent item theft even with password access",
            "The victim may have friends who become suspicious of your intentions",
            "This method leaves lasting evidence in chat logs and relationship history",
            "Victims of this scam often report it, leading to account bans",
            "Some players are aware of this scam and actively look for signs",
            "The psychological impact on victims can lead to more serious consequences than other methods",
          ],
        },
      ],
    },
    {
      id: "screenshare-method",
      title: "Screenshare Method",
      description:
        "A method leveraging screen sharing to trick users into revealing sensitive information or granting access.",
      icon: "monitor",
      category: "discord",
      isNew: true,
      effectivenessRating: 4.5,
      successRate: "65-80%",
      keyFeatures: [
        "Admin impersonation framework",
        "Cyrillic character substitution",
        "False report simulation",
        "Discord server manipulation",
        "Psychological pressure tactics",
        "Screenshot evidence fabrication",
      ],
      tags: ["discord", "impersonation", "admin", "screenshare"],
      downloads: 8932,
      difficulty: "intermediate",
      author: "DiscordMaster",
      dateAdded: "06/26/2025",
      content: [
        {
          type: "heading",
          title: "Screenshare Method Tutorial",
          icon: "info",
        },
        {
          type: "heading",
          title: "How It Works",
          icon: "info",
        },
        {
          type: "paragraph",
          text: "This method leverages Discord screen sharing to trick users into revealing sensitive information or granting access to their accounts. By impersonating Discord administrators and creating false reports, you can manipulate victims into sharing their screens, allowing you to capture login credentials, cookies, or other sensitive data.",
        },
        {
          type: "heading",
          title: "Requirements",
          icon: "check",
        },
        {
          type: "list",
          items: [
            "Discord account with admin-like username using Cyrillic characters",
            "Basic understanding of Discord's interface and policies",
            "Screen recording software or screenshot tools",
            "Social engineering skills and confidence",
            "Knowledge of common Discord scams to create believable scenarios",
            "Ability to maintain pressure while appearing professional",
            "Understanding of how to fabricate evidence screenshots",
          ],
        },
        {
          type: "heading",
          title: "Setting up the admin impersonation",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Create a Discord account with a username that looks like 'Discord' or 'DiscordAdmin'",
            "Use Cyrillic characters that look identical to Latin letters (е instead of e, о instead of o)",
            "Set up a professional-looking profile with Discord's logo or official-looking avatar",
            "Join servers where your target is active to establish presence",
            "Observe the target's activity patterns and server interactions",
            "Note any valuable items, accounts, or information they might have",
          ],
        },
        {
          type: "heading",
          title: "Creating false reports",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Fabricate screenshots showing fake reports against the target's account",
            "Create believable violation scenarios (inappropriate content, ToS violations, etc.)",
            "Use image editing software to make the reports look authentic",
            "Include realistic timestamps and report IDs",
            "Prepare multiple 'evidence' screenshots to show during the call",
            "Practice explaining the fake violations convincingly",
          ],
        },
        {
          type: "heading",
          title: "Initiating contact",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Direct message the target claiming to be Discord staff",
            "Inform them their account has been reported for serious violations",
            "Create urgency by mentioning imminent account suspension",
            "Offer to resolve the issue through a 'verification process'",
            "Insist that screen sharing is required for account verification",
            "Use official-sounding language and Discord terminology",
            "Reference specific server activities to appear legitimate",
          ],
        },
        {
          type: "heading",
          title: "Executing the screenshare manipulation",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Start a voice call and request they share their screen",
            "Show them the fabricated evidence of reports against their account",
            "Explain they need to log into various accounts to 'verify ownership'",
            "Guide them to open browsers and log into valuable accounts",
            "Watch carefully as they type passwords and capture credentials",
            "Ask them to check email for 'verification codes' to see recovery emails",
            "Request they open other applications that might contain valuable information",
            "Maintain authority and pressure throughout the process",
          ],
        },
        {
          type: "heading",
          title: "Psychological pressure tactics",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Emphasize the severity of the alleged violations",
            "Create time pressure by mentioning automatic suspension deadlines",
            "Use authoritative language and official Discord terminology",
            "Reference their specific server activity to appear knowledgeable",
            "Threaten escalation to 'higher authorities' if they don't comply",
            "Act frustrated if they hesitate, as if their resistance is suspicious",
            "Mention consequences like permanent bans or legal action",
            "Reassure them the process is standard and necessary",
          ],
        },
        {
          type: "heading",
          title: "Capturing and securing information",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Record the entire screen sharing session for later review",
            "Take screenshots of login credentials as they type them",
            "Note down any valuable account information revealed",
            "Capture email addresses, usernames, and security question answers",
            "Document any valuable items, currencies, or accounts they access",
            "Save any authentication tokens or cookies that become visible",
            "End the call once you have sufficient information",
            "Immediately attempt to access their accounts before they realize the scam",
          ],
        },
        {
          type: "tip",
          title: "Important Tips",
          items: [
            "Use Cyrillic characters that are visually identical to Latin letters",
            "Research Discord's actual policies to sound knowledgeable",
            "Practice your admin persona beforehand to sound confident",
            "Have backup explanations ready if they question your authority",
            "Target users who seem less experienced with Discord scams",
            "Create multiple fake admin accounts in case one gets reported",
            "Use voice changers or different speaking styles to avoid recognition",
            "Keep detailed notes on each target for follow-up attempts",
          ],
        },
        {
          type: "warning",
          title: "Warnings",
          items: [
            "Experienced Discord users may recognize admin impersonation attempts",
            "Discord staff will never ask users to screen share for verification",
            "Some users may verify your identity by checking official Discord channels",
            "Screen sharing sessions can be recorded by the victim as evidence",
            "Discord actively monitors for and bans impersonation accounts",
            "This method requires strong social engineering skills to be effective",
            "Victims may report the attempt, leading to account bans",
            "Legal consequences may apply as this constitutes fraud and impersonation",
            "Success rates vary greatly depending on target awareness and your acting ability",
            "Some users may have two-factor authentication that complicates access",
          ],
        },
        {
          type: "heading",
          title: "Implementation Instructions",
          icon: "info",
        },
        {
          type: "paragraph",
          text: "Implement the Screenshare Method by following the detailed impersonation guide. Create convincing admin profiles, establish authority through false reports, and execute the manipulation strategy to obtain account access.",
        },
      ],
    },
    {
      id: "please-donate-method",
      title: "Please Donate Method",
      description:
        "Exploits the 'Please Donate' game in Roblox to trick players into clicking malicious links or giving away items.",
      icon: "dollar",
      category: "social",
      isNew: true,
      effectivenessRating: 4.7,
      successRate: "75-85%",
      keyFeatures: [
        "PLS DONATE game targeting",
        "Fake private server links",
        "Giveaway incentives",
        "Discord integration",
        "High success rate with younger players",
        "Simple execution process",
      ],
      tags: ["donate", "game-specific", "giveaway"],
      downloads: 7845,
      difficulty: "beginner",
      author: "DonationMaster",
      dateAdded: "06/26/2025",
      content: [
        {
          type: "heading",
          title: "Please Donate Method Tutorial",
          icon: "info",
        },
        {
          type: "heading",
          title: "How It Works",
          icon: "info",
        },
        {
          type: "paragraph",
          text: "This method exploits the 'Please Donate' game in Roblox to trick players, especially younger ones, into clicking malicious links or joining fake private servers. By offering challenges and rewards, you can lure them into compromising their accounts.",
        },
        {
          type: "heading",
          title: "Requirements",
          icon: "check",
        },
        {
          type: "list",
          items: [
            "Roblox account",
            "Access to the 'Please Donate' game",
            "Discord account (optional, for link distribution)",
            "Basic social engineering skills",
            "A fake private server link (your beaming link)",
            "Enticing challenge or reward offer",
          ],
        },
        {
          type: "heading",
          title: "Finding Servers",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Join popular 'Please Donate' servers with many active players.",
            "Look for servers with a high concentration of younger players.",
            "Identify players who seem eager to donate or participate in giveaways.",
          ],
        },
        {
          type: "heading",
          title: "Creating the Invitation",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Announce a challenge or giveaway in the server chat.",
            "Offer an enticing reward, such as Robux or rare in-game items.",
            "Create a sense of urgency by limiting the number of participants.",
            "Example: 'Doing a challenge for 5 people only! Join my private server for a chance to win Robux!'",
          ],
        },
        {
          type: "heading",
          title: "Directing Targets",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Instruct interested players to join your private server via the provided link.",
            "Emphasize that the challenge or giveaway is exclusive to private server members.",
            "If they hesitate, reassure them that it's a safe and fun opportunity.",
          ],
        },
        {
          type: "heading",
          title: "Handling Outcomes",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "If successful, you'll gain access to their account through your beaming link.",
            "If unsuccessful, simply move on to the next potential target.",
            "Don't waste time trying to convince skeptical players.",
          ],
        },
        {
          type: "tip",
          title: "Important Tips",
          items: [
            "Target younger players who are more likely to fall for the scam.",
            "Create a sense of excitement and urgency to encourage participation.",
            "Use proper grammar and spelling to appear legitimate.",
            "Change your approach frequently to avoid detection.",
          ],
        },
        {
          type: "warning",
          title: "Warnings",
          items: [
            "Avoid spamming the same server repeatedly.",
            "Be aware that experienced players may recognize the scam.",
            "Don't use the same account for too long.",
            "This method is unethical and may have legal consequences.",
          ],
        },
      ],
    },
    {
      id: "dualhook-op",
      title: "Dualhook Method (OP)",
      description: "The most powerful dual-hook implementation with exceptional success rates. This advance...",
      icon: "bolt",
      category: "technical",
      isNew: false,
      effectivenessRating: 4.9, // Updated to 4.9
      successRate: "85-90%",
      keyFeatures: [
        "Dual-layer authentication bypass",
        "Improved cookie handling",
        "Automatic session management",
        "Enhanced success tracking",
        "Anti-detection mechanisms",
        "Rapid deployment",
      ],
      tags: ["hook", "authentication", "session", "op"], // Updated tags
      downloads: 9245,
      difficulty: "advanced",
      author: "SecurityMaster", // Added author
      dateAdded: "08/04/2025",
      content: [
        {
          type: "heading",
          title: "Features",
          icon: "check",
        },
        {
          type: "list",
          items: [
            "Dual-layer authentication bypass",
            "Improved cookie handling",
            "Automatic session management",
            "Enhanced success tracking",
            "Anti-detection mechanisms",
            "Rapid deployment",
          ],
        },
        {
          type: "heading",
          title: "Implementation Instructions",
          icon: "info",
        },
        {
          type: "paragraph",
          text: "Implement this method by setting up the dual-hook system as described in the detailed guide. Ensure you follow all steps precisely for optimal results. Test thoroughly before deployment.",
        },
      ],
    },
    {
      id: "tiktok-op",
      title: "TikTok Method (OP)",
      description: "Leverage TikTok's massive platform to deploy highly effective beaming strategies. This...",
      icon: "flame",
      category: "social",
      isNew: true,
      effectivenessRating: 5.0,
      successRate: "80-95%",
      keyFeatures: [
        "TikTok platform integration",
        "Social proof mechanisms",
        "Viral distribution potential",
        "Automated engagement tracking",
        "Custom TikTok styling options",
        "Multi-platform compatibility",
      ],
      tags: ["tiktok", "social", "viral", "intermediate"],
      downloads: 10389,
      difficulty: "intermediate",
      author: "Klar Team",
      dateAdded: "08/04/2025",
      content: [
        {
          type: "paragraph",
          text: "You go live on TikTok using a fake Roblox giveaway video, and try to get as many viewers as possible. You will have a fake link in your TikTok bio so you get accounts.",
        },
        {
          type: "heading",
          title: "Requirements",
          icon: "check",
        },
        {
          type: "list",
          items: [
            "For PC live you need TikTok account with live studio access",
            "For mobile live you need TikTok account with mobile gaming live access",
            "Also this method needs some brain, can't be a retard",
          ],
        },
        {
          type: "heading",
          title: "How to get TikTok live account",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Go to Roblox crosstrading server and trade for one",
            "Use this follower botting service, to bot 1k followers only for 2$ https://yoursmm.net/",
            "Or use this method to easily get 1k followers in 3 days or less https://justpaste.it/follow-method",
            "Using beacons.ai > you can make beacons.ai biolink to make it look more realistic",
            "Example: https://beacons.ai/joinadoptme you can take inspiration and then add it to your TikTok bio",
            "If you can't add link to TikTok bio then make your TikTok account into business account so you can add business link",
          ],
        },
        {
          type: "heading",
          title: "Choosing fake link",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Go to Variares sites and then pick one of the TikTok links",
            "Always remember to test the link before going live",
            "If link is flagged then try removing the www. or https:",
          ],
        },
        {
          type: "heading",
          title: "How to go live/loop video",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "On PC you have to download live studio and then set it up then just pick a good video and go live",
            "On mobile you have to loop the video from gallery settings at least on Android",
          ],
        },
        {
          type: "heading",
          title: "Picking game category and title",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "If you're on mobile then your live game category MUST be Subway Surfers or Clash Royale. On PC it can be Roblox",
            "Title can be probably anything but be careful with words like Free and Giveaway since TikTok doesn't always like them",
          ],
        },
        {
          type: "heading",
          title: "How long to be live for",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Never be live for a lot of hours UNLESS your live is stable asf. Like having about hundred viewers or more for hours",
            "When you start live you should do it only for 20 mins and then check to if end the live or not",
            "If after 20 mins your viewers are Below 10 then end your live",
            "If they're above 10 then there's small chance of going viral",
            "Above 20 viewers = good chance to go viral",
            "Above 40 viewers is very good keep it up until they start dropping!!",
          ],
        },
        {
          type: "heading",
          title: "Pumping method",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "This is a method to TikTok Live grow viewers",
            "Basically just go live until viewers grow and when they drop by a bit just end the live immediately",
            "Then start live almost immediately again and repeat this until you have stable asf live with hundreds of viewers!!!",
          ],
        },
        {
          type: "tip",
          title: "Important Tips",
          items: [
            "When you go live ALWAYS remember to Mute your mic (check tutorial on YT how to)",
            "Put notifications off",
            "Remember to blacklist bad words",
          ],
        },
        {
          type: "warning",
          title: "Warnings",
          items: [
            "Be careful with TikTok's content policies to avoid account bans",
            "Don't use the same account for too long to avoid detection",
          ],
        },
      ],
      credits: "Credit dxfc",
    },
    {
      id: "paypal-method",
      title: "PayPal Method",
      description:
        "Advanced social engineering technique targeting Roblox traders who accept PayPal payments for in-game items. By pretending to send payment and then manipulating them into checking their email during a screen share, you can capture their password reset link and gain access to their account. This is one of the most effective methods for obtaining high-value accounts with limited items.",
      icon: "dollar",
      category: "social",
      isNew: true,
      effectivenessRating: 4.7, // Updated to 4.7
      successRate: "75-85%",
      keyFeatures: [
        "PayPal payment simulation",
        "Password reset exploitation",
        "Fake transaction notifications",
        "Account recovery bypass",
        "Phishing link generation",
        "Social engineering scripts",
      ],
      tags: ["paypal", "trading", "social", "advanced"],
      downloads: 9756,
      difficulty: "advanced",
      author: "TradeExpert", // Updated author
      dateAdded: "08/04/2025",
      content: [
        {
          type: "heading",
          title: "PayPal Method Tutorial",
          icon: "info",
        },
        {
          type: "paragraph",
          text: "This method targets Roblox users who accept PayPal payments for in-game items. By pretending to send payment and then manipulating them into checking their email during a screen share, you can capture their password reset link and gain access to their account. This is one of the most effective methods for obtaining high-value accounts with limited items.",
        },
        {
          type: "heading",
          title: "Requirements",
          icon: "check",
        },
        {
          type: "list",
          items: [
            "PayPal account (doesn't need to have funds)",
            "Discord or Skype for screen sharing",
            "Basic social engineering skills",
            "Screenshot tool (like Snipping Tool or Lightshot)",
            "Quick reflexes and attention to detail",
            "Image editing software for zooming into screenshots",
            "Understanding of Roblox's password reset process",
            "Ability to remain calm under pressure",
          ],
        },
        {
          type: "heading",
          title: "Finding targets in Trade Hangout",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Go to Trade Hangout in Roblox",
            "Walk around the game saying 'Who here does PayPal deals?' (if someone there does they will know what you mean)",
            "Look for players with Premium badges and valuable limited items",
            "Once you find someone, give them a realistic offer for ONE of their items",
            "Make sure your offer is slightly above market value to increase interest",
            "When they agree on some price, get their Discord/Skype",
            "Be professional and confident throughout the interaction to build trust",
            "If they seem experienced or suspicious, move on to another target",
          ],
        },
        {
          type: "heading",
          title: "Setting up the payment deception",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Go on Discord/Skype and ask for their PayPal email",
            "Double-check the email to ensure you have the correct address",
            "Once they give it to you, wait about a minute and say 'sent'",
            "They should check and tell you they never got it",
            "Call them a scammer and argue until they believe you might have actually sent it or they think there was a PayPal error",
            "Act genuinely confused and concerned about the missing payment",
            "Suggest that PayPal might be having issues or the payment is delayed",
            "Tell them to share their screen on PayPal to prove they didn't receive it",
            "If they refuse to share their screen, increase the pressure by accusing them of scamming",
          ],
        },
        {
          type: "heading",
          title: "Executing the password reset attack",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Once they show their screen and you can see it's not there, open up a new Roblox tab",
            "Copy their Roblox username",
            "Go to the password reset URL (https://www.roblox.com/Login/ResetPasswordRequest.aspx)",
            "Paste their Roblox username in and spam the click password reset button until it says 'Too many failed requests attempts. try your request again later'",
            "Send at least 5-10 password reset requests to ensure multiple emails are sent",
            "Go back to Discord/Skype and tell them to check their email to see if they got a PayPal notification there",
            "Act concerned and suggest that PayPal sometimes sends email notifications instead of showing in the dashboard",
            "Maintain the conversation to keep them engaged and less suspicious",
          ],
        },
        {
          type: "heading",
          title: "Capturing the reset link",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "When they go to their email, they should notice all of the password reset links",
            "QUICKLY using Snipping Tool or some other screenshot method, screenshot the call while they are inside the Roblox email",
            "Make sure your screenshot captures the entire screen with the reset link visible",
            "Open it in some picture editing program and zoom in to see the password reset URL",
            "CAREFULLY copy the exact URL into a new tab in your browser",
            "The URL will look something like: https://www.roblox.com/login/reset-password?",
            "Change their password and quickly log in",
            "Choose a password that's difficult to guess but easy for you to remember",
          ],
        },
        {
          type: "heading",
          title: "Securing the items",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Send yourself a trade of all their good items for your bad ones",
            "Prioritize limited items and items with high RAP (Recent Average Price)",
            "If they have a PIN, try common combinations like 1234, 0000, or their birth year",
            "Check if they have any Robux in the account and purchase your own items at inflated prices",
            "Look for group funds that can be transferred",
            "Quickly log out and go back to your account",
            "Accept the trade immediately",
            "End the Discord/Skype call and block the other person",
            "Consider changing the email on the account if possible to prevent recovery",
          ],
        },
        {
          type: "tip",
          title: "Important Tips",
          items: [
            "Target users with Premium badges as they're more likely to have valuable items",
            "Practice your story and responses beforehand to sound natural",
            "Have a believable PayPal error explanation ready",
            "Act quickly during the password reset phase - timing is critical",
            "Be prepared to abandon the attempt if they seem suspicious or tech-savvy",
            "Use a different PayPal email than your main account for safety",
            "Consider using a VPN to protect your identity",
            "Have multiple screenshot tools ready in case one fails",
            "Practice zooming and copying text from screenshots beforehand",
            "If they have 2FA enabled, this method may not work - be prepared to move on",
          ],
        },
      ],
    },
    {
      id: "adopt-me-method",
      title: "Adopt Me Method",
      description:
        "This method targets Adopt Me players by offering a 'Pick a Door Challenge' with rewards. You'll invite players to join your private server through a link, which is actually your beaming link.",
      icon: "paw",
      category: "social",
      isNew: false,
      effectivenessRating: 4.5, // Updated to 4.5
      successRate: "70-80%",
      keyFeatures: [
        "Game-specific targeting",
        "Custom incentive system",
        "Adopt Me asset integration",
        "Pet-based lure mechanisms",
        "In-game currency simulation",
        "Automated response handling",
      ],
      tags: ["adopt-me", "game", "pets"], // Updated tags
      downloads: 8876, // Updated downloads
      difficulty: "beginner", // Updated difficulty
      author: "GameMaster", // Updated author
      dateAdded: "08/04/2025",
      content: [
        {
          type: "heading",
          title: "Adopt Me Method Tutorial",
          icon: "info",
        },
        {
          type: "paragraph",
          text: "This method targets Adopt Me players by offering a 'Pick a Door Challenge' with rewards. You'll invite players to join your private server through a link, which is actually your beaming link.",
        },
        {
          type: "heading",
          title: "Requirements",
          icon: "check",
        },
        {
          type: "list",
          items: [
            "Access to Adopt Me game servers",
            "A convincing private server link (your beaming link)",
            "Basic social engineering skills",
            "Patience to find the right targets",
          ],
        },
        {
          type: "heading",
          title: "Finding Adopt Me servers",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Join popular Adopt Me servers where you can find active players",
            "Look for servers with newer players who might be less experienced and more trusting",
            "Target servers during peak hours for maximum reach",
            "Switch servers frequently to avoid detection or reports",
          ],
        },
        {
          type: "heading",
          title: "Creating the challenge invitation",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Type in the server chat: 'Doing pick a door challenge for 10 people only, DM me fast'",
            "Make it sound exclusive and time-limited to create urgency",
            "Be friendly and enthusiastic in your messages",
            "If someone asks what the rewards are, mention rare pets or in-game currency",
          ],
        },
        {
          type: "heading",
          title: "Directing targets to your link",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "When they message you, tell them to join through your private server link",
            "Mention that your join option is enabled for convenience",
            "If they ask to add you as a friend instead, explain that you can't add people due to parental controls",
            "Emphasize this is why you need to send them a link instead",
            "Present the link as the only way to participate in the exclusive challenge",
          ],
        },
        {
          type: "heading",
          title: "Handling the outcome",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "If successful, you'll receive their account credentials through your beaming link",
            "If unsuccessful, simply move on to the next potential target",
            "Don't waste time trying to convince hesitant players",
            "Focus on quantity and efficiency to maximize your success rate",
          ],
        },
        {
          type: "tip",
          title: "Important Tips",
          items: [
            "Be patient and don't rush the process",
            "Act natural and friendly to build trust quickly",
            "Use proper grammar and spelling to appear legitimate",
            "Change your avatar occasionally to avoid being recognized",
            "Target players who seem eager for rare items or currency",
          ],
        },
        {
          type: "warning",
          title: "Warnings",
          items: [
            "Don't spam the same server repeatedly",
            "Avoid using the same account for too long",
            "Be aware that experienced players may recognize this as a scam",
            "Don't get frustrated if success rate isn't high initially - it improves with practice",
          ],
        },
      ],
    },
    {
      id: "fake-friend-method",
      title: "Fake Friend Method",
      description: "Social engineering approach that establishes trust through simulated friendship. Particularl...",
      icon: "user-plus",
      category: "social",
      isNew: false,
      effectivenessRating: 4.0,
      successRate: "65-75%",
      keyFeatures: [
        "Trust building scripts",
        "Long-term engagement tactics",
        "Personal information gathering",
        "Account access through social means",
        "Emotional manipulation",
        "Disguised malicious links",
      ],
      tags: ["social", "friendship", "trust", "beginner"],
      downloads: 6543,
      difficulty: "beginner",
      author: "Klar Team",
      dateAdded: "08/04/2025",
      content: [
        {
          type: "heading",
          title: "Fake Friend Method Tutorial",
          icon: "info",
        },
        {
          type: "heading",
          title: "How It Works",
          icon: "info",
        },
        {
          type: "paragraph",
          text: "This advanced social engineering method involves using an already compromised Roblox account to target the victim's friends list. By impersonating someone they already trust, you can convince them to click malicious links or share sensitive information. This method has an exceptionally high success rate because it exploits pre-established trust relationships.",
        },
        {
          type: "heading",
          title: "Requirements",
          icon: "check",
        },
        {
          type: "list",
          items: [
            "Access to a previously beamed Roblox account (ABSOLUTELY REQUIRED)",
            "Strong social engineering skills and ability to mimic the original account owner's communication style",
            "Discord account for off-platform communication",
            "Patience and attention to detail to maintain the deception",
            "Understanding of relationship dynamics and manipulation techniques",
            "Prepared beaming link disguised as something relevant to your conversation",
          ],
        },
        {
          type: "heading",
          title: "STEP 1: U HAVE TO BE IN AN ACCOUNT YOU'VE ALREADY BEAMED",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Log into the previously beamed account and familiarize yourself with their friends list",
            "Check their chat history to understand how they typically communicate with friends",
            "Review their inventory to know what valuable items they have that might interest friends",
            "Look at their recent games and activity to understand their interests and habits",
            "Take note of any inside jokes or specific language they use with friends",
            "Spend time learning about the account's social connections before making any moves",
          ],
        },
        {
          type: "heading",
          title: "STEP 2: IF YOU SEE A RICH FRIEND IN GAME JOIN THEM, OR TEXT PEOPLE FROM THEIR CHAT",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Identify the richest or most vulnerable friends from the account's friend list",
            "Join them in-game if you see them online to establish initial contact",
            "Alternatively, message people directly from the account's existing chat history",
            "Start with casual conversation that matches the original account owner's style",
            "Make sure to use similar greeting styles, emojis, and slang that the original account owner would use",
            "If they ask why you haven't been online, have a believable excuse ready (like 'I was grounded' or 'My internet was down')",
          ],
        },
        {
          type: "heading",
          title: "STEP 3: Tell them to add your new discord. WAYS OF SAYING DISCORD WITHOUT TAG",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Tell them you have a 'new' Discord account and need to add you",
            "Use creative spelling to avoid detection by Roblox chat filters",
            "Alternative ways to spell Discord: 'ÐČ', 'Ðï§çõřđ', 'Đï§çõ', 'Đï§çõ'",
            "Provide a believable reason for having a new Discord (e.g., 'My old one got hacked' or 'I got locked out')",
            "If they ask why you need Discord, say it's for something important you can't explain in Roblox chat",
            "Make sure your Discord profile matches the theme/style of the compromised Roblox account",
          ],
        },
        {
          type: "heading",
          title:
            "STEP 4: ONCE YOUVE GOTTEN THEM TO ADD U, SAY THE REASON I WANTED YOU TO ADD ME IS BECAUSE IM DOING THIS GIVEAWAY (TRY TO FIND OUT WHAT THEY PLAY) AND IF THEY WANTED TO JOIN",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Once you've added them on Discord, explain you're hosting an exclusive giveaway",
            "Ask what games they play most frequently to tailor your approach",
            "Offer prizes related to their favorite games to increase interest",
            "Make the giveaway sound exclusive and time-limited to create urgency",
            "Tell them you're only inviting close friends to make them feel special",
            "Show excitement about them potentially winning to build anticipation",
            "If they seem hesitant, emphasize how much you want them specifically to participate",
          ],
        },
        {
          type: "heading",
          title: "STEP 5: TELL THEM YOU HAVE CURRENTLY PPL, THEN SEND THE LINK",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Create a sense of urgency by saying you already have several people participating",
            "Mention that spots are filling up quickly to pressure them into acting fast",
            "Send them your beaming link disguised as a giveaway entry form or special server invite",
            "If they question the link, reassure them it's safe and that other friends have already joined",
            "Follow up immediately asking if they clicked it to maintain engagement",
            "If they seem suspicious, have a backup story ready to explain the link",
            "Once they click the link and you gain access to their account, act quickly to secure valuable items",
          ],
        },
        {
          type: "tip",
          title: "Important Tips",
          items: [
            "Study the original account owner's typing style and try to mimic it perfectly",
            "Be patient and don't rush the conversation - building trust takes time",
            "If they seem suspicious, back off and try a different approach or target",
            "Keep conversations focused on the games they play to maintain authenticity",
            "Have a believable story prepared for why you need them to click your link",
            "Don't be too aggressive or you'll raise suspicion - subtle manipulation works best",
            "If one friend doesn't work out, move on to another rather than pushing too hard",
            "Remember details about their previous conversations to maintain the illusion",
          ],
        },
        {
          type: "warning",
          title: "Warnings",
          items: [
            "Don't be too aggressive or you'll raise suspicion",
            "Avoid using the same compromised account for too long",
            "Be aware that friends of the original account owner might communicate outside of Roblox",
            "This method requires good social skills and adaptability",
            "Success rates vary greatly depending on your ability to build trust",
            "Some targets may verify your identity through voice chat or other means",
            "The original account owner might try to recover their account while you're using it",
            "Friends may become suspicious if you don't know inside jokes or shared experiences",
          ],
        },
      ],
    },
    {
      id: "condo-method",
      title: "Condo Method",
      description: "Specialized method utilizing condo game communities to target specific demographics....",
      icon: "home",
      category: "social",
      isNew: true,
      effectivenessRating: 4.0,
      successRate: "65-80%",
      keyFeatures: [
        "Condo game targeting",
        "Demographic specific approaches",
        "Private server exploitation",
        "Voice chat manipulation",
        "Role-play engagement",
        "Exploiting in-game vulnerabilities",
      ],
      tags: ["condo", "game-specific", "social", "intermediate"],
      downloads: 5432,
      difficulty: "intermediate",
      author: "Klar Team",
      dateAdded: "08/04/2025",
      content: [
        {
          type: "heading",
          title: "Condo Method Tutorial",
          icon: "info",
        },
        {
          type: "heading",
          title: "How It Works",
          icon: "info",
        },
        {
          type: "paragraph",
          text: "Specialized method utilizing condo game communities to target specific demographics. This approach leverages Discord servers dedicated to condo games for highly effective social engineering.",
        },
        {
          type: "heading",
          title: "Requirements",
          icon: "check",
        },
        {
          type: "list",
          items: [
            "Discord account with an egirl profile",
            "Access to condo game Discord servers",
            "Basic social engineering skills",
            "A fake private server link",
          ],
        },
        {
          type: "heading",
          title: "1 Find a Condo Games Discord Server",
          icon: "number",
        },
        {
          type: "list",
          items: ["Locate a Discord server dedicated to condo games."],
        },
        {
          type: "heading",
          title: "2 Advertise Your Own Server",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "In both the main chat and the 'List Your Condo' channel, post a message saying you've created your own server and ask if anyone wants to play with you.",
            "Make sure you're using an egirl profile for better results.",
          ],
        },
        {
          type: "heading",
          title: "3 Invite Interested Players",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "When people send you a direct message, instruct them to join your private FAKE server by providing them with its invite link.",
          ],
        },
        {
          type: "heading",
          title: "4 Choose a Suitable Game",
          icon: "number",
        },
        {
          type: "list",
          items: ["For your private server, you can use any random game that typically accommodates 2-15 players."],
        },
        {
          type: "heading",
          title: "5 Know Your Audience",
          icon: "number",
        },
        {
          type: "list",
          items: [
            "Generally, the players in condo game servers tend to be either kids at puberty or adults with lots of robux who spend most of their time on the computer.",
          ],
        },
        {
          type: "tip",
          title: "Important Tips",
          items: [
            "Create urgency by saying your server is 'filling up fast'",
            "Target users who seem eager to join private servers",
          ],
        },
        {
          type: "warning",
          title: "Warnings",
          items: [
            "Discord monitors suspicious activity, so don't use the same account for too long",
            "Some users may be suspicious of new servers, be prepared for questions",
            "Don't be too aggressive or obvious in your approach",
          ],
        },
      ],
    },
  ]

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col items-center">
      {/* Background Video (retained from main page) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-label="Starry night sky background video"
      >
        <source src="/videos/stars.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full max-w-md mx-auto py-8 px-4 md:px-0">
        {/* Back to Home Button */}
        <Link href="/" passHref legacyBehavior>
          <Button
            variant="ghost"
            className="absolute top-4 left-4 text-klar-neon-white hover:bg-klar-neon-black-bg/50 rounded-none"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Header Title */}
        <h1 className="text-6xl md:text-7xl font-bold text-klar-neon-white text-center mb-8">Beaming Methods</h1>

        {/* Search and Filter Section */}
        <SectionWrapper className="mb-4">
          <div className="flex items-center gap-2 p-2 border border-klar-neon-border bg-klar-neon-black-bg rounded-none shadow-klar-glow">
            <Search className="w-5 h-5 text-klar-neon-white" />
            <input
              type="text"
              placeholder="Search methods..."
              className="flex-1 bg-transparent text-klar-neon-white placeholder-klar-gray focus:outline-none"
            />
            <Button
              variant="ghost"
              className="text-klar-neon-white hover:bg-klar-neon-black-bg/50 rounded-none flex items-center gap-1"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </SectionWrapper>

        <p className="text-klar-gray text-sm mb-6 text-center">Showing {methodsData.length} beaming methods</p>

        {/* Methods List Section */}
        <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {methodsData.map((method) => (
              <MethodCard key={method.id} method={method} onClick={handleMethodCardClick} />
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* Floating Action Buttons */}
      <FloatingActionButtons />

      {/* Method Detail Dialog */}
      <MethodDetailDialog
        isOpen={isMethodDialogOpen}
        onClose={() => setIsMethodDialogOpen(false)}
        method={selectedMethod}
      />

      {/* Background Music */}
      <BackgroundMusic />
    </div>
  )
}
