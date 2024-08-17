import React from 'react'
import Card from '../components/tools/card'

const page = () => {
  const array = Array(10).fill(null)
  const tools  = [
    {name:"Password Generator", description:"", image:"/image/password.jpg"},
    {name:"Text Case Converter", description:"", image:"/image/textCC.png"},
    {name:"Base64 Encoder/Decoder", description:"", image:"/image/baseED.png"},
    {name:"Timestamp Converter", description:"", image:"/image/timestampC.png"},
    {name:"Unit Converter", description:"", image:"/image/unitC.png"},
    {name:"Clipboard Manager", description:"", image:"/image/clipboardM.jpg"},
    {name:"QR Code Generator", description:"", image:"/image/qrgenerator.png"},
    {name:"JSON Formatter/Validator", description:"", image:"/image/jsonFV.png"},
    {name:"CSS Minifier/Beautifier", description:"", image:"/image/cssMB.jpg"},
    {name:"Color Palette Generator", description:"", image:"/image/colorPG.png"},
    {name:"Markdown Editor", description:"", image:"/image/mkdown.jpg"},
    {name:"Regex Tester", description:"", image:"/image/regex.jpg"},
    {name:"Image Converter", description:"", image:"/image/image-converter.jpg"},
    {name:"HTTP Header Inspector", description:"", image:"/image/HTTP-headers.jpg"},
    {name:"File Compressor", description:"", image:"/image/Compress.jpg"},
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