import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Info, CheckCircle, X, Zap, Bell } from "lucide-react"

export function FooterSection() {
  return (
    <div className="w-full max-w-md mx-auto mt-8 p-4 text-center text-crimson-gray">
      <Accordion type="single" collapsible className="w-full mb-4">
        <AccordionItem
          value="item-1"
          className="border border-crimson-neon-border rounded-none shadow-crimson-glow bg-crimson-neon-black-bg" // Edgy: remove rounded corners
        >
          <AccordionTrigger className="text-crimson-neon-white text-lg px-4 py-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-crimson-neon-white" />
            Why Choose CRIMSON?
          </AccordionTrigger>
          <AccordionContent className="text-crimson-gray px-4 pb-4 text-left">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-crimson-neon-white mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-crimson-neon-white">100% Secure:</strong> Our generators and tools are built
                  with security in mind. We don&apos;t store your data or track your activity.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-crimson-neon-white mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-crimson-neon-white">No Dualhooks:</strong> Unlike other services, our
                  generators are not dualhooked. Your webhooks and links are yours alone.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-crimson-neon-white mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-crimson-neon-white">High Performance:</strong> Our tools are optimized for
                  speed and reliability, ensuring you get the best results every time.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-crimson-neon-white mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-crimson-neon-white">Regular Updates:</strong> We constantly update our methods
                  and tools to stay ahead of security changes and maintain effectiveness.
                </div>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <p className="text-lg font-bold text-crimson-neon-red mb-2">#1 Roblox Beaming Website</p>
      <p className="text-sm">&copy; {new Date().getFullYear()} CRIMSON — All Rights Reserved.</p>
    </div>
  )
}
