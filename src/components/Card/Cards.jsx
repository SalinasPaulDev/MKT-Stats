import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export const SuggestionCard = ({suggestion}) => {
  return (
    <div className="w-full md:px-6">
        <Card className="w-full border-indigo-400 bg-indigo-300/10">
        <CardHeader>
            <h5 className="font-semibold text-xl text-slate-800">Sugerencia:</h5>
        </CardHeader>
        <CardBody>
            <p className="text-slate-700">{suggestion}</p>
        </CardBody>
        <Divider/>
        <CardFooter>
            <Link
            isExternal
            showAnchorIcon
            href="https://idcreativa.com/"
            className="text-sm"
            >
            Contactenos con esta información para solventar este problema
            </Link>
        </CardFooter>
        </Card>
    </div>
  );
}