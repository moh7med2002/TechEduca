import FormContact from "./FormContact";
import SocialContact from "./SocialContact";

export default function MainContact(){
    return (
        <div className="py-[50px]">
            <div className=" container container-2 flex justify-between flex-wrap gap-y-10">
                <div className="lg:w-[38%]">
                    <SocialContact/>
                </div>
                <div className="lg:w-[58%]">
                    <FormContact/>
                </div>
            </div>

            <div className="mt-[60px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79041.624107105!2d-1.177548180968307!3d51.75039548695164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48713380adc41faf%3A0xc820dba8cb547402!2z2KPZg9iz2YHZiNix2K_YjCDYp9mE2YXZhdmE2YPYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2s!4v1656666321236!5m2!1sar!2s" width="100%" height="500"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}