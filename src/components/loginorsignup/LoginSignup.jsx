"use client";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import React, { useState } from "react";

const LoginSignup = () => {
  const [selected, setSelected] = useState("login");
  return (
    <Card
      className="w-full md:w-[380px] p-2 md:p-4 dark:bg-gray-900"
      radius="none"
      shadow="none"
    >
      <CardBody className="overflow-hidden">
        <Tabs
          fullWidth
          color="secondary"
          size="md"
          aria-label="Tabs form"
          selectedKey={selected}
          onSelectionChange={setSelected}
          radius="none"
        >
          <Tab key="login" title="Login">
            <form className="flex flex-col gap-4">
              <Input radius="none" isRequired label="Email" type="email" />
              <Input
                radius="none"
                isRequired
                label="Password"
                type="password"
              />
              <p className="text-center text-sm">
                Need to create an account?{" "}
                <Link
                  color="secondary"
                  size="sm"
                  onPress={() => setSelected("sign-up")}
                >
                  Sign up
                </Link>
              </p>
              <div className="flex gap-2 justify-end">
                <Button radius="none" fullWidth color="secondary">
                  Login
                </Button>
              </div>
            </form>
          </Tab>
          <Tab key="sign-up" title="Sign up">
            <form className="flex flex-col gap-4 h-[300px]">
              <Input radius="none" isRequired label="Name" type="password" />
              <Input radius="none" isRequired label="Email" type="email" />
              <Input
                radius="none"
                isRequired
                label="Password"
                type="password"
              />
              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link
                  color="secondary"
                  size="sm"
                  onPress={() => setSelected("login")}
                >
                  Login
                </Link>
              </p>
              <div className="flex gap-2 justify-end">
                <Button radius="none" fullWidth color="secondary">
                  Sign up
                </Button>
              </div>
            </form>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default LoginSignup;
