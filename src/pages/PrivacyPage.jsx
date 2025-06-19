import React from "react";

export default function PrivacyPage() {
  return (
    <div className="bg-white xl:px-[120px] xl:py-10 px-10 py-5 min-h-screen flex flex-col items-center">
      <div className="flex gap-3 items-center">
        <img src="/logo.png" className="w-14" />
        <h2 className="text-2xl font-bold text-red-600">
          Hand<span className="text-black">car</span>
        </h2>
      </div>

      <div className="my-10 flex flex-col gap-7 w-full">
        <h1 className="text-2xl text-black font-semibold text-center">
          Privacy Policy
        </h1>
        <div className="flex flex-col gap-7 items-start">
          <p className="">
            Effective Date: <span className="font-semibold">01/01/2025</span>
          </p>
          <p>
            At Handcar, accessible via our mobile application and website
            (https://handcar.ae), we are committed to protecting your privacy
            and ensuring transparency about how we handle your personal
            information. This Privacy Policy outlines the data we collect, how
            we use it, and your rights regarding your data.
          </p>

          <div className="flex flex-col gap-3">
            <p className="font-semibold">1. Information We Collect</p>

            <ul className="space-y-4 list-disc list-inside">
              <li>
                <span className="font-semibold">
                  a. Personal Identification Data
                </span>
                <p className="my-2">
                  We collect the following personal data during registration,
                  service use, or customer support interactions:
                </p>
                <ul className="ml-6 list-disc">
                  <li>Name</li>
                  <li>Email Address</li>
                  <li>Mobile Number</li>
                  <li>Delivery Address(es)</li>
                  <li>Vehicle Details (make, model, year)</li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">
                  b. Usage & Technical Information
                </span>
                <p className="my-2">
                  When you use Handcar, we may automatically collect:
                </p>
                <ul className="ml-6 list-disc">
                  <li>Device information (OS, model, unique ID)</li>
                  <li>IP address and general location (via Google API)</li>
                  <li>App and website usage behavior</li>
                  <li>
                    Authentication tokens and session data (via JWT, GetStorage)
                  </li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">c. Vendor & Service Data</span>
                <p className="my-2">If you register as a vendor:</p>
                <ul className="ml-6 list-disc">
                  <li>Business name and service details</li>
                  <li>Location data</li>
                  <li>Reviews and ratings</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">2. How We Use Your Information</p>
            <p>Your data is used for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Account creation and secure login (OTP via Twilio)</li>
              <li>
                Personalized vehicle-based product and service recommendations
              </li>
              <li>Order processing, wishlist, and coupon application</li>
              <li>Subscription management and manual payment tracking</li>
              <li>Location-based vendor matching</li>
              <li>Customer support and issue resolution</li>
              <li>Improving services through analytics and user feedback</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">3. Data Sharing and Disclosure</p>
            <p className="my-2">
              We do not sell your personal data. We may share data only with:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Service providers (e.g., Twilio, Google Maps, Cloudinary, AWS)
                strictly for functional operations
              </li>
              <li>Vendors for fulfilling your service requests or orders</li>
              <li>
                Legal authorities when required by UAE law or in case of fraud
                or security threats
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            {" "}
            <p className="font-semibold">4. Data Storage and Security</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                All data is securely stored on AWS servers and protected using
                industry-standard encryption and access controls.
              </li>
              <li>Media files are stored via Cloudinary.</li>
              <li>
                Authentication is managed through secure token systems (JWT,
                GetStorage).
              </li>
              <li>
                We implement strict middleware-based error handling to prevent
                unauthorized access.
              </li>
            </ul>
            <p>
              Despite our efforts, no digital platform is 100% secure. We
              encourage users to maintain strong passwords and avoid sharing
              login credentials.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">
              5. Cookies and Tracking Technologies
            </p>
            <p className="my-2">
              Cookies and similar technologies may be used to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Maintain session state</li>
              <li>Analyze user behavior for improvements</li>
              <li>Enable location-based features</li>
            </ul>
            <p className="my-2">
              You can manage cookie preferences through your browser or mobile
              settings
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {" "}
            <p className="font-semibold">6. User Rights</p>
            <p className="my-2">As a user, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to or restrict certain processing</li>
              <li>Withdraw consent for data processing</li>
              <li>Request data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{" "}
              <span className="text-blue-500 underline">+971544463803</span>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">7. Children’s Privacy</p>
            <p>
              Handcar is not intended for users under the age of 18. We do not
              knowingly collect personal data from minors. If we become aware of
              such data, we will delete it immediately.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">8. Changes to this Policy</p>
            <p>
              We may update this Privacy Policy from time to time. You will be
              notified of major changes via app notifications or email.
              Continued use of the app/website implies acceptance of the updated
              policy.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {" "}
            <p className="font-semibold">9. Contact Us</p>
            <p>
              If you have questions about this Privacy Policy or wish to make a
              request regarding your personal data, you can contact us at:
            </p>
            <p>Handcar</p>
            {/* <p>
              Email:
              <span className="font-semibold">hello@tronacademy.in</span>
            </p> */}
            <p>
              Mobile:
              <span className="font-semibold">+971 544463803</span>
            </p>
            <p>
              Website:
              <span className="font-semibold">https://handcar.ae</span>
            </p>
            {/* <p>
              Address:
              <span className="font-semibold">
                Second Floor, City Tower, Friend Ship Nagar, Chavakkad, Kerala
                680506
              </span>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
