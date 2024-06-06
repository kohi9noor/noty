import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled int he browserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {})
} catch (error) {
  console.log(error)
}
