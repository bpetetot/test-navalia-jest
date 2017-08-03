/* eslint-env jest */
const { Chrome } = require('navalia')
const { toMatchImageSnapshot } = require('jest-image-snapshot')
expect.extend({ toMatchImageSnapshot })


describe('todolist', () => {
  let chrome

  beforeEach(() => {
    chrome = new Chrome()
  })

  afterEach(() => {
    chrome.done()
  })

  const addTodo = async (chrome, nbTodos) => {
    for (let i = 0; i < nbTodos; i++) {
      await chrome.type('#newTodoInput', `my todo ${i}`)
      await chrome.click('#addBtn')
      expect(await chrome.exists(`#todo-${i}`)).toBe(true)
    }
  }

  it('test todolist page default rendering', async () => {
    await chrome.goto('http://localhost:8000')
    const image = await chrome.screenshot()
    expect(image).toMatchImageSnapshot()
  })

  it('test todolist nothing panel default rendering', async () => {
    await chrome.goto('http://localhost:8000')
    const image = await chrome.screenshot('#nothing')
    expect(image).toMatchImageSnapshot()
  })

  it('test todolist rendering with todos', async () => {
    await chrome.goto('http://localhost:8000')
    await addTodo(chrome, 4)
    const image = await chrome.screenshot()
    expect(image).toMatchImageSnapshot()
  })
})