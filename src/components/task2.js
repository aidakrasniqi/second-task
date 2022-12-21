import React from "react";
import "./task2.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { MainData } from "./data2";

const Task2 = () => {
  return (
    <div className="task2">
      <Tabs>
        <TabList>
          <Tab>Domains</Tab>
          <Tab>Web Hosting</Tab>
          <Tab>Dedicated Servers</Tab>
          <Tab>Virtual Cloud Servers</Tab>
          <Tab>WordPress Hosting</Tab>
          <Tab>Email Hosting</Tab>
          <Tab>VPS Hosting Servers</Tab>
          <Tab>Free Hosting</Tab>
        </TabList>

        <div className="tab-panels">
          {MainData.map((props) => {
            return (
              <TabPanel key={props.id}>
                {props.items.map((l) => {
                  return (
                    <div className="item">
                      <h6>{l.tittle}</h6>
                      <p>{l.price}</p>
                      <div>{l.description}</div>
                      <button>Buy Now</button>
                    </div>
                  );
                })}
              </TabPanel>
            );
          })}
        </div>
      </Tabs>
    </div>
  );
};

export default Task2;
