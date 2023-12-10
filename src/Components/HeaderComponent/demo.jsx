<Accordion.Root
className=" rounded-md "
type="multiple"
defaultValue="item-1"
collapsible
>
<AccordionItem value="item-1">
  <AccordionTrigger>Sub Category</AccordionTrigger>
  <AccordionContent>
    {subCategories.map((item, index) => (
      <div
        key={index}
        className="pl-[30px] text-[rgba(45,45,45,.7)] text-[12px]"
      >
        <p className="my-[5px]">
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </p>
      </div>
    ))}
  </AccordionContent>
</AccordionItem>
<AccordionItem value="item-2">
  <AccordionTrigger>Size</AccordionTrigger>
  <AccordionContent>
    {sizes.map((item, index) => (
      <div
        key={index}
        className="pl-[30px] text-[rgba(45,45,45,.7)] text-[12px]"
      >
        <p className="my-[5px]">
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </p>
      </div>
    ))}
  </AccordionContent>
</AccordionItem>
<AccordionItem value="item-2">
  <AccordionTrigger>Size</AccordionTrigger>
  <AccordionContent>
    {sizes.map((item, index) => (
      <div
        key={index}
        className="pl-[30px] text-[rgba(45,45,45,.7)] text-[12px]"
      >
        <p className="my-[5px]">
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </p>
      </div>
    ))}
  </AccordionContent>
</AccordionItem>
<AccordionItem value="item-3">
  <AccordionTrigger>Brand</AccordionTrigger>
  <AccordionContent>
    {brands.map((item, index) => (
      <div
        key={index}
        className="pl-[30px] text-[rgba(45,45,45,.7)] text-[12px]"
      >
        <p className="my-[5px]">
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </p>
      </div>
    ))}
  </AccordionContent>
</AccordionItem>
<AccordionItem value="item-4">
  <AccordionTrigger>color</AccordionTrigger>
  <AccordionContent>
    {brands.map((item, index) => (
      <div
        key={index}
        className="pl-[30px] text-[rgba(45,45,45,.7)] text-[12px] border-2 border-black solid"
      >
       
      </div>
    ))}
  </AccordionContent>
</AccordionItem>
</Accordion.Root>