import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button"
import { features } from "@/data/features";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
  <div>
    <div className="grid-background"></div>

    <HeroSection/>
    <section>
      <div>
        <h2>Powerful Features for Your Career Growth</h2>
        <div>{features.map((feature,index) => {
          return (
            <Card>
             <CardHeader>
              <CardTitle>Card Title</CardTitle>
               <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
             </CardHeader>
             <CardContent>
              <p>Card Content</p>
             </CardContent>
             <CardFooter>
             <p>Card Footer</p>
             </CardFooter>
           </Card>
          )
        })}
        </div>
      </div>
    </section>
  </div>
          
   
  );
}
