import { TooltipProvider } from '@radix-ui/react-tooltip'
import { useState } from 'react'
import { Div } from '~/components/compat/div'
import { P } from '~/components/compat/p'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Progress } from '~/components/ui/progress'
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip'

const GITHUB_AVATAR_URI =
  'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg'

export const ProfileCard = () => {
  const [progress, setProgress] = useState(78)

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100))
  }
  return (
    <Card className="w-full max-w-sm p-6">
      <CardHeader className="items-center">
        {/* @ts-expect-error */}
        <Avatar alt="Rick Sanchez's Avatar" className="w-24 h-24">
          <AvatarImage src={GITHUB_AVATAR_URI} />
          <AvatarFallback>
            <P>RS</P>
          </AvatarFallback>
        </Avatar>
        <Div className="p-3" />
        <CardTitle className="pb-2 text-center">Rick Sanchez</CardTitle>
        <Div className="flex flex-row">
          <CardDescription className="text-base font-semibold">Scientist</CardDescription>
          <TooltipProvider>
            <Tooltip delayDuration={150}>
              <TooltipTrigger className="px-2 pb-0.5 active:opacity-50">
                <P className="w-4 h-4 text-foreground/70" />
              </TooltipTrigger>
              <TooltipContent className="py-2 px-4 shadow">
                <P className="native:text-lg">Freelance</P>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Div>
      </CardHeader>
      <CardContent>
        <Div className="flex flex-row justify-around gap-3">
          <Div className="flex flex-col items-center">
            <P className="text-sm text-muted-foreground">Dimension</P>
            <P className="text-xl font-semibold">C-137</P>
          </Div>
          <Div className="flex flex-col items-center">
            <P className="text-sm text-muted-foreground">Age</P>
            <P className="text-xl font-semibold">70</P>
          </Div>
          <Div className="flex flex-col items-center">
            <P className="text-sm text-muted-foreground">Species</P>
            <P className="text-xl font-semibold">Human</P>
          </Div>
        </Div>
      </CardContent>
      <CardFooter className="flex flex-col gap-3 pb-0">
        <Div className="flex flex-row items-center overflow-hidden">
          <P className="text-sm text-muted-foreground">Productivity:</P>
          <P className="text-sm font-bold text-sky-600">{progress}%</P>
        </Div>
        <Progress value={progress} className="h-2" />
        <Div />
        <Button
          variant="outline"
          className="shadow shadow-foreground/5"
          onClick={updateProgressValue}
          onPress={updateProgressValue}
        >
          <P>Update</P>
        </Button>
      </CardFooter>
    </Card>
  )
}
