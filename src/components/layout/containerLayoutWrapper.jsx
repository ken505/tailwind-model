export const ContainerLayoutWrapper = (props) => {
  return (
    <div
      className=" bg-gradient-to-tr
                  dark:bg-gradient-radial-at-t
                from-pink-300 via-blue-300 to-green-200
                dark:from-yellow-50 dark:via-indigo-900 dark:to-gray-800
                  min-h-screen"
    >
      {/* <div className="mx-auto grid-cols-2 min-h-screen"> */}
      <div className="grid grid-cols-1 mx-auto">
        {/* <main className="px-4 text-gray-600 flex justify-center"> */}
        <div>{props.children}</div>
        {/* </main> */}
      </div>
    </div>
  );
};
// colorsample
// bg-gradient-to-tr
// bg-gradient-radial-at-t
// from-white via-white to-gray-300
// from-pink-300 via-blue-300 to-green-200
// dark:from-indigo-700 dark:via-purple-600 dark:to-pink-500

// grid grid-rows-[auto,1fr,auto]
