import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[250px]", className)} {...props}>
      <CardContent className="grid gap-4 pt-10">
        <div>
          <div
            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
          >
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Fund Investements
              </p>
              <p className="text-sm text-muted-foreground">Account Value</p>
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">$15,038,493.00</p>
                <Button className="px-2 py-1 bg-yellow-500 rounded-2xl text-sm">78%</Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
