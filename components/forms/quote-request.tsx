'use client'
import Input from "./input"
import Label from './label'
import Textarea from "./textarea"
import Button from "../button"

const QuoteRequest = () => {
    return (
        <form
            className="flex flex-col p-4 pt-0"
            action="https://formspree.io/f/xeewndoj"
            name="request-quote"
            method="POST"
        >
            <Label>
                Name <span className="text-secondary">*</span>
                <div className="flex items-center justify-between">
                <Input 
                    type="text"
                    name="first-name"
                    placeholder="First"
                    required
                    style={{marginRight: '0.5rem'}}
                />
                <Input 
                    type="text"
                    name="last-name"
                    placeholder="Last"
                    required
                    style={{marginLeft: '0.5rem'}}
                />
                </div>
            </Label>
            <Label htmlFor="email">
                Email <span className="text-secondary">*</span>
                <Input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    required 
                />
            </Label>
            <Label htmlFor="phone">
                Phone
                <Input 
                    type="tel"
                    name="phone"
                    placeholder="000-000-0000"
                />
            </Label>
            <Label htmlFor="request">
                Tell us about your project <span className="text-secondary">*</span>
                <Textarea name="request" style={{marginBottom: '1rem'}} required></Textarea>
            </Label>

            <Button type="submit" buttonType="button" buttonText="Submit Request" />
        </form>
    )

}

export default QuoteRequest