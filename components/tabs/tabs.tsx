import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { GalleryIcon } from "./GalleryIcon";
import { MusicIcon } from "./MusicIcon";
import { VideoIcon } from "./VideoIcon";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function TabsComponent() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="secondary" variant="bordered" className="justify-center items-center">
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-1">
              <GalleryIcon />
              <span>1</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <Image
                src="https://source.unsplash.com/random/900x700/?girl=1"
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </CardBody>
          </Card>{" "}
        </Tab>
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2">
              <MusicIcon />
              <span>2</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <Image
                src="https://source.unsplash.com/random/900x700/?girl=2"
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </CardBody>
          </Card>{" "}
        </Tab>
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <VideoIcon />
              <span>3</span>
            </div>
          }
        >
          <Card>
            <CardBody>
              <Image
                src="https://source.unsplash.com/random/900x700/?girl=3"
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </CardBody>
          </Card>{" "}
        </Tab>
      </Tabs>
    </div>
  );
}
