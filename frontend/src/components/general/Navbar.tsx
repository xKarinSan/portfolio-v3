import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
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
                                            if (refInstance.current != null) {
                                                refInstance.current.scrollIntoView(
                                                    {
                                                        behavior: "smooth",
                                                    }
                                                );
                                            }
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
