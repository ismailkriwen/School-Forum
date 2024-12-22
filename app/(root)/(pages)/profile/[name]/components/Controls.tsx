"use client";

import { Button } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import { Role, User } from "@prisma/client";
import { MessageSquarePlus, Trash, UserMinus, UserPlus } from "lucide-react";
import { type Session } from "next-auth";
import { toast } from "react-toastify";
import { DeleteModal } from "../modals/delete";
import { NewMessage } from "../modals/msg";

type Props = {
  owner: boolean;
  user: User | null | undefined;
  session: Session | null;
};

export const Controls = ({ owner, user, session }: Props) => {
  const {
    isOpen: msgIsOpen,
    onOpen: msgOnOpen,
    onOpenChange: msgOnOpenChange,
  } = useDisclosure();

  const {
    isOpen: deleteIsOpen,
    onOpen: deleteOnOpen,
    onOpenChange: deleteOnOpenChange,
  } = useDisclosure();

  return (
    <>
      {!owner && (
        <>
          <Button
            radius="sm"
            variant="ghost"
            startContent={<MessageSquarePlus className="w-4 h-4" />}
            onPress={msgOnOpen}
          >
            Message
          </Button>
        </>
      )}
      {owner ? (
        <Button
          color="danger"
          variant="flat"
          radius="sm"
          onPress={deleteOnOpen}
          isIconOnly
        >
          <Trash className="w-4 h-4" />
        </Button>
      ) : (
        session?.user?.groups.includes(Role.Admin) && (
          <Button
            color="danger"
            variant="flat"
            radius="sm"
            onPress={deleteOnOpen}
            isIconOnly
          >
            <Trash className="w-4 h-4" />
          </Button>
        )
      )}
      <NewMessage
        isOpen={msgIsOpen}
        onOpenChange={msgOnOpenChange}
        receiver={user as User}
        sender={session?.user as User}
      />
      {owner ? (
        <DeleteModal
          isOpen={deleteIsOpen}
          onOpenChange={deleteOnOpenChange}
          user={user}
        />
      ) : (
        <DeleteModal
          isOpen={deleteIsOpen}
          onOpenChange={deleteOnOpenChange}
          user={user}
        />
      )}
    </>
  );
};
