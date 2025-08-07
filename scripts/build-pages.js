#!/usr/bin/env node

import { build } from 'vite'
import fs from 'fs'
import path from 'path'

async function buildForGitHubPages() {
  try {
    console.log('🏗️  Building for GitHub Pages...')
    
    // Build with GitHub Pages config
    await build({
      configFile: 'vite.config.pages.ts',
      mode: 'production'
    })
    
    // Create a 404.html file for SPA routing
    const distPath = path.resolve(process.cwd(), 'dist')
    const indexHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8')
    fs.writeFileSync(path.join(distPath, '404.html'), indexHtml)
    
    console.log('✅ GitHub Pages build complete!')
    console.log('📁 Files ready in ./dist directory')
    
  } catch (error) {
    console.error('❌ Build failed:', error)
    process.exit(1)
  }
}

buildForGitHubPages()