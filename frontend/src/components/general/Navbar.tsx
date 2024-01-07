import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";
import RefTagType from "@/types/RefTagType";
import { RowsIcon } from "@radix-ui/react-icons";

import { Link, Box } from "@chakra-ui/react";
export default function Navbar({ refSet }: { refSet: RefTagType[] }) {
    return (
        <Box
            position="fixed"
            width="100%"
            background="white"
            margin="0 auto"
            top="0"
            zIndex={99}
        >
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>
                        <RowsIcon />
                    </MenubarTrigger>
                    <MenubarContent>
                        {refSet.map((refTag: RefTagType) => {
                            const { refName, refInstance } = refTag;
                            return (
                                <MenubarItem>
                                    <Link
                                        onClick={() => {
                                            refInstance?.current.scrollIntoView(
                                                {
                                                    behavior: "smooth",
                                                }
                                            );
                                        }}
                                    >
                                        {refName}
                                    </Link>
                                </MenubarItem>
                            );
                        })}
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>{" "}
        </Box>
    );
}
