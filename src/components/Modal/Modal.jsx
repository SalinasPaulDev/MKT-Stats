import React, { useState } from "react";
import {Modal as NextModal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useHandleModal } from "../../store/handleModal";

export default function Modal() {
    const {open, setOpen} = useHandleModal((state) => state)

  return (
    <>
      <NextModal isOpen={open} >
        <ModalContent>
              <ModalHeader className="flex flex-col gap-1">
                <img src={'/remove.svg'} className="w-20 m-auto"/>
                <h2 className="text-center text-2xl mt-2">Ups!</h2>
              </ModalHeader>
              <ModalBody>
                <p className="text-xl px-8 text-slate-700"> 
                  Se necesitan completar las preguntas de todas las categorias para avanzar a la siguiente pantalla
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={() => setOpen(false)}>
                  Cerrar
                </Button>
              </ModalFooter>
        </ModalContent>
      </NextModal>
    </>
  );
}