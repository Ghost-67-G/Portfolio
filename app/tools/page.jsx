import React from 'react'
import Card from '../components/tools/card'

const page = () => {
  const array = Array(10).fill(null)
  const tools  = [
    {name:"Password Generator", description:"", image:"/image/password.jpg", link:"/tools/password-generator"},
    {name:"Text Case Converter", description:"", image:"/image/textCC.png", link:"/tools/text-case-converter"},
    {name:"Base64 Encoder/Decoder", description:"", image:"/image/baseED.png", link:"/tools/base64-encoder-decorde"},
    {name:"Timestamp Converter", description:"", image:"/image/timestampC.png", link:"/tools/timestamp-converter"},
    {name:"Unit Converter", description:"", image:"/image/unitC.png", link:"/tools/unit-converter"},
    {name:"Regex Tester", description:"", image:"/image/regex.jpg", link:"/tools/regex-tester"},
    {name:"QR Code Generator", description:"", image:"/image/qrgenerator.png", link:"/tools/qr-code-generator"},
    {name:"JSON Formatter/Validator", description:"", image:"/image/jsonFV.png", link:"/tools/json-formatter-validator"},
    {name:"CSS Minifier/Beautifier", description:"", image:"/image/cssMB.jpg", link:"/tools/css-minifier-beautifier"},
    {name:"HTTP Header Inspector", description:"", image:"/image/HTTP-headers.jpg", link:"/tools/http-header-inspector"},
    {name:"File Compressor", description:"", image:"/image/Compress.jpg", link:"/tools/file-compressor"},
    {name:"Color Palette Generator", description:"", image:"/image/colorPG.png", link:"/tools/color-palette-generator"},
    {name:"Markdown Editor", description:"", image:"/image/mkdown.jpg", link:"/tools/markdown-editor"},
    {name:"Image Converter", description:"", image:"/image/image-converter.jpg", link:"/tools/image-converter"},
    // {name:"Clipboard Manager", description:"", image:"/image/clipboardM.jpg"},
  ]
  return (
    <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5'>
    {tools.map((tool,index)=>(
      <div key={index}>
      <Card tool={tool} />
      </div>
    ))}
      </div>
  )
}

export default page