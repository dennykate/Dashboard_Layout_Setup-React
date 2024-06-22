import { useDisclosure } from "@mantine/hooks";

import NavBar from "../navBar/NavBar";
import SideBar from "../sideBar/SideBar";
import { Suspense } from "react";

interface PropsType {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsType) => {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <div className="flex items-start h-screen overflow-hidden">
      <SideBar opened={opened} />

      <div
        className={`h-full ${!opened ? "w-full" : "w-full"} transition-300 `}
      >
        <NavBar toggle={toggle} />

        <main className="h-[calc(100%-70px)] w-full overflow-y-auto bg-[#f5f5f5] p-5">
          <Suspense fallback={<></>}>{children}</Suspense>
        </main>
      </div>
    </div>
  );
};

export default Layout;
