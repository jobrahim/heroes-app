import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoutes, PrivateRoutes, PublicRoutes } from '../heroes/routes'




export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={
              <PublicRoutes>
                <LoginPage />
              </PublicRoutes>
            }
            />

            <Route path="/*" element= {
              <PrivateRoutes>
                 <HeroesRoutes />
              </PrivateRoutes>
            }/>

        </Routes>
    </>
  )
}
