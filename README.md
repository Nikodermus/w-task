# Opening Hours

> by **Nicolas M. Pardo**

Vite template with React, TypeScript, and Styled Components.

---

## 🚶🏽‍♂️ Getting Started

This project requires Node v14+ and Yarn.

```bash
git clone https://github.com/Nikodermus/w-task
cd w-task
yarn
```

---

## 🏃🏽‍♂️ Run the project

You can run `yarn dev`, or `yarn serve` (for a production version) and open [localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🧪 Testing

This project uses `jest` as test runner and `react-testing-library` to mount React components and do component testing.

```bash
yarn test:unit:ci
```

---

## 📚 Notes

- You can modify [ScheduleWrapper.tsx](src/components/Schedule/ScheduleWrapper.tsx), inside `pseudoFetch({})` to change the behavior of the information load to:

  - Make it forcefully fail `{fail: boolean}`. (By default it fails 1 out 10 times the info is lodaded).
  - Set a delay in milliseconds to delay the loading of the information. `{time: number}` (By default it loads after ~1 second).
  - Change the information displayed in the schedule. `{data: Schedule}`. (By default it displays the following information inside [response.mock.json](src/__mocks__/response.mock.json), you can change it there as well).

- This project uses a set of utilities to create a [CSS Variables Design System](https://gorillalogic.com/blog/building-design-systems-with-css-variables/), using as source [styled.constant.ts](src/constants/styled.constant.ts), use your browser to see all the generated variables.

---

## 👩🏽‍💼 License & Attribution

- [Original template](https://github.com/fabien-ml/react-ts-vite-template) by **Fabien MARIE-LOUISE**.

- [Styled Component System](https://github.com/Nikodermus/gatsby-styled-components-sanity) by **Nicolas M. Pardo**

MIT License
