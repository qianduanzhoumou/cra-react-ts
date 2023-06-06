import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Lyout from "@/components/layout";
import Login from "@/components/login";
import { asyncRoutes } from "./routers";

const HandleRouter: React.FC = () => {

    // 递归路由，默认二级，后续有需要在改
    const createRoutes = (rule: any[]) => {
        const resultArr: JSX.Element[] = []  // 存储路由规则
        rule.forEach((route, index) => {
            if (route.path && route.element) {
                resultArr.push(
                    <Route key={index} path={route.path} element={route.element}></Route>
                )
            }
            if (route.children) {
                route.children.forEach((route: any, index: number) => {
                    resultArr.push(
                        <Route key={index} path={route.path} element={route.element}></Route>
                    )
                })
            }
        })
        return resultArr
    }

    return (
        <Routes>
            <Route path='/' element={<Lyout />}>
                {createRoutes(asyncRoutes)}
            </Route>
            <Route path='/login' element={<Login />} />
        </Routes>
    );
}

export default HandleRouter;