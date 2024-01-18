const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <Home />, //componente a renderizar en este path
      },
      {
        path: "/products",
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            // id is a placeholder
            // Value of id is not known at the time of writing config
            // How to access value of id is shown at end of article
            // syntax - :<place-holder-name>
            path: "/products/:id",
            element: <Product />,
          },
        ],
      },
    ],
  },
];
export default routes;