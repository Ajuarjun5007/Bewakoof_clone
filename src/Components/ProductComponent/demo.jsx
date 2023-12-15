<Accordion.Root
className=" rounded-md "
type="single"
defaultValue="item-1"
collapsible
>
<AccordionItem value="item-1">
  <AccordionTrigger className="">
    <div className="flex gap-2">
    <img src={list_img} alt="" />
    <div className="">
    <h2 className="font-bold text-sm">   
    Product Description
       </h2>
    <p className="text-xs text-[#878787]">Manufacture, Care and Fit</p>
    </div>
    </div>
    </AccordionTrigger>
  <AccordionContent classNames="data-set=[closed]">
  Joining the TriBe is simple. Follow the link given below 
  and simply add your TriBe membership plan to your cart. 
  Proceed to make your payment online. Your 
  TriBe membership will be activated once your payment is successful. 
  You will receive a welcome email confirming your membership.

    <p className="text-[#23527c] py-[10px]">Join the TriBe</p>
  </AccordionContent>
</AccordionItem>

</Accordion.Root>