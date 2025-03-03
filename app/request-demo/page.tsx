"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Glasses } from "lucide-react"

export default function RequestDemo() {
  useEffect(() => {
    // This will run after the component mounts
    const script = document.createElement("script")
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      // @ts-ignore
      window.fnames = new Array()
      // @ts-ignore
      window.ftypes = new Array()
      // @ts-ignore
      window.fnames[0] = "EMAIL"
      window.ftypes[0] = "email"
      window.fnames[1] = "FNAME"
      window.ftypes[1] = "text"
      window.fnames[2] = "LNAME"
      window.ftypes[2] = "text"
      window.fnames[3] = "ADDRESS"
      window.ftypes[3] = "address"
      window.fnames[4] = "PHONE"
      window.ftypes[4] = "phone"
      window.fnames[5] = "BIRTHDAY"
      window.ftypes[5] = "birthday"
      window.fnames[6] = "COMPANY"
      window.ftypes[6] = "text"
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <Link href="/" className="flex items-center space-x-2">
            <Glasses className="h-6 w-6 text-primary" />
            <span className="inline-block font-bold">LifeLens</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container max-w-lg mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Request a Demo</h1>

        <div id="mc_embed_shell">
          <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
          <style jsx>{`
            #mc_embed_signup {
              background: #fff;
              clear: left;
              font: 14px Helvetica, Arial, sans-serif;
              width: 100%;
            }
            #mc_embed_signup .button {
              background-color: hsl(var(--primary));
              color: hsl(var(--primary-foreground));
            }
            #mc_embed_signup .button:hover {
              background-color: hsl(var(--primary) / 0.9);
            }
          `}</style>
          <div id="mc_embed_signup">
            <form
              action="https://gmail.us22.list-manage.com/subscribe/post?u=8922dd363ba65b464b459ec45&amp;id=fa782236fc&amp;f_id=00dcc2e1f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
            >
              <div id="mc_embed_signup_scroll">
                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
                </div>
                <div id="mce-responses" className="clear foot">
                  <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                  <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                </div>
                <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <input type="text" name="b_8922dd363ba65b464b459ec45_fa782236fc" tabIndex={-1} defaultValue="" />
                </div>
                <div className="optionalParent">
                  <div className="clear foot">
                    <input
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                      value="Subscribe"
                    />
                    <p style={{ margin: "0px auto" }}>
                      <a href="http://eepurl.com/i9yfA-" title="Mailchimp - email marketing made easy and fun">
                        <span style={{ display: "inline-block", backgroundColor: "transparent", borderRadius: "4px" }}>
                          <img
                            className="refferal_badge"
                            src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                            alt="Intuit Mailchimp"
                            style={{
                              width: "220px",
                              height: "40px",
                              display: "flex",
                              padding: "2px 0px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Glasses className="h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground">© 2024 LifeLens. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

