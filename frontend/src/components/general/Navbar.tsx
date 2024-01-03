import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { RowsIcon } from "@radix-ui/react-icons";

export default function Navbar() {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>
                    <RowsIcon />
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Home</MenubarItem>
                    <MenubarItem>About Me</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Skills</MenubarItem>
                    <MenubarItem>Projects</MenubarItem>
                    <MenubarItem>Experiences</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Contact Me</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
