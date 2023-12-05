import React from 'react';
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const AccordionDemo = () => (
  <Accordion.Root
    className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and feel.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames(
      'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        'text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));






<div className="pb-[50px]">
<Accordion.Root
  className="AccordionRoot"
  type="single"
  defaultValue="item-1"
  collapsible
>
  <Accordion.Item className="AccordionItem flex flex-col border-[1px] border-[#e6e6e6] solid" value="item-1">
    <AccordionTrigger className="flex items-center justify-between text-[12px] w-[100%] px-[30px] py-[20px]  border-black solid">
     <div className="text-[#333] text-[12px] font-[900]">
     How do I become a TriBe member?
     </div>
      </AccordionTrigger>
    <Accordion.Content className="text-[14px] px-[30px] py-[20px]"> 
    Joining the TriBe is simple.Follow the link given below and simply add your TriBe membership plan to your
     cart. Proceed to make your payment online. 
     Your TriBe membership will be activated once your payment is successful. You will receive a welcome email confirming your membership.

      <p className="py-[20px] text-[#337ab7]"> Join the TriBe  </p>
    </Accordion.Content>
  </Accordion.Item>

  <Accordion.Item className="AccordionItem flex flex-col border-[1px] border-[#e6e6e6] solid" value="item-2">
    <AccordionTrigger className="flex items-center justify-between text-[12px] w-[100%] px-[30px] py-[20px]  border-black solid">
     <div className="text-[#333] text-[12px] font-[900]">
     Can I upgrade my TriBe Membership plan?
     </div>
      </AccordionTrigger>
    <AccordionContent className="text-[14px] px-[30px] py-[20px]"> 
    Currently we do not have an upgrade option but you can simply renew your TriBe membership for a longer term at the time of renewal.
    </AccordionContent>
  </Accordion.Item>

  <Accordion.Item className="AccordionItem flex flex-col border-[1px] border-[#e6e6e6] solid" value="item-3">
    <AccordionTrigger className="flex items-center justify-between text-[12px] w-[100%] px-[30px] py-[20px]  border-black solid">
     <div className="text-[#333] text-[12px] font-[900]">
     Do I need to save my card details with Bewakoof® to become a TriBe member?
     </div>
      </AccordionTrigger>
    <AccordionContent className="text-[14px] px-[30px] py-[20px]"> 
    No, you do not need to save a card with us to become a TriBe member. However, please note that you will have to pay online while purchasing the TriBe membership itself. Subsequent orders can be paid online or as COD.

    </AccordionContent>
  </Accordion.Item>
  <Accordion.Item className="AccordionItem flex flex-col border-[1px] border-[#e6e6e6] solid" value="item-4">
    <AccordionTrigger className="flex items-center justify-between text-[12px] w-[100%] px-[30px] py-[20px]  border-black solid">
     <div className="text-[#333] text-[12px] font-[900]">
     Will my TriBe membership auto renew?
     </div>
      </AccordionTrigger>
    <AccordionContent className="text-[14px] px-[30px] py-[10px]"> 
    No, currently we do not have an auto renew option for our TriBe memberships.
    </AccordionContent>
  </Accordion.Item>
</Accordion.Root>

</div>




export default AccordionDemo;