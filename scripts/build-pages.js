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

    // Check for index.html or fallback to index-static.html
    let indexFilePath = path.join(distPath, 'index.html')
    if (!fs.existsSync(indexFilePath)) {
      const staticPath = path.join(distPath, 'index-static.html')
      if (fs.existsSync(staticPath)) {
        // Copy index-static.html to index.html
        fs.copyFileSync(staticPath, indexFilePath)
        console.log('📄 Copied index-static.html to index.html for GitHub Pages.')
      } else {
        throw new Error('Neither index.html nor index-static.html found in dist/')
      }
    }

    // Create 404.html from index.html
    const indexHtml = fs.readFileSync(indexFilePath, 'utf8')
    fs.writeFileSync(path.join(distPath, '404.html'), indexHtml)

    console.log('✅ GitHub Pages build complete!')
    console.log('📁 Files ready in ./dist directory')

  } catch (error) {
    console.error('❌ Build failed:', error)
    process.exit(1)
  }
}

buildForGitHubPages()