import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
function Home() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-primary">MedSync</h1>
      <h4 className="text-2xl font-medium text-secondary-foreground">
        Synchronizing Healthcare, Empowering Care. 🌍💙
      </h4>
    </div>
    // <Tabs
    //   defaultValue="account"
    //   className="w-[400px] border border-primary">
    //   <TabsList>
    //     <TabsTrigger value="account">
    //       <span className="z-20 font-semibold">Account</span>
    //     </TabsTrigger>
    //     <TabsTrigger value="password">
    //       <span className="z-20 font-semibold">Account</span>
    //     </TabsTrigger>
    //     <TabsTrigger value="user">
    //       <span className="z-20 font-semibold">Account</span>
    //     </TabsTrigger>
    //     <TabsTrigger value="data">
    //       <span className="z-20 font-semibold">Account</span>
    //     </TabsTrigger>
    //   </TabsList>
    //   <TabsContent
    //     value="account"
    //     className="border border-primary">
    //     Make changes to your account here. Lorem ipsum dolor sit amet,
    //     consectetur adipisicing elit. Ut facere asperiores quaerat molestias
    //     placeat animi vel est, dicta dolores modi quod magnam delectus
    //     consequatur, minus sapiente sit tempora debitis eligendi.
    //   </TabsContent>
    //   <TabsContent
    //     value="password"
    //     className="border border-red-500">
    //     aceat animi vel est, dicta dolores modi quod magnam delectus
    //     consequatur, minus sapiente sit tempora debitis eligendi.
    //   </TabsContent>
    //   <TabsContent
    //     value="user"
    //     className="border border-primary">
    //     pisicing elit. Ut facere asperiores quaerat molestias placeat animi vel
    //     est, dicta dolores modi quod magnam delectus consequatur, minus sapiente
    //     sit tempora debitis eligendi.
    //   </TabsContent>
    //   <TabsContent
    //     value="data"
    //     className="border border-primary">
    //     Change your password here.
    //   </TabsContent>
    // </Tabs>
  );
}

export default Home;
