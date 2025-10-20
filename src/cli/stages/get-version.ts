import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { parsePnpmWorkspaceYaml } from 'pnpm-workspace-yaml'

const cwd = process.cwd()

const PnpmWorkspacePath = path.join(cwd, 'pnpm-workspace.yaml')

export const hasPnpmCatalogs = (() => {
  try {
    const yamlContent = fs.readFileSync(PnpmWorkspacePath, 'utf-8')
    const yaml = parsePnpmWorkspaceYaml(yamlContent).toJSON()
    return !!(yaml.catalog || yaml.catalogs)
  }
  catch {
    return false
  }
})()
