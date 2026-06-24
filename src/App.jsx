import React, { useMemo, useState } from "react";

const asset = (name) => `/assets/${name}`;
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, "");
const waitlistEndpoint = apiBaseUrl ? `${apiBaseUrl}/waiting-list` : "";

const offers = [
  "Find nearby riders instantly",
  "Secured payments system",
  "Real-time delivery tracking",
  "Instant price negotiation",
  "Upload item images for confirmation",
  "Smart rider load management",
  "Chat with riders in-app",
  "Get paid per delivery",
];

const featureCards = [
  {
    icon: "▣",
    title: "Upload item Images for Confirmation",
    text: "Snap and upload clear photos of your parcel to help us verify its contents before pickup.",
  },
  {
    icon: "●",
    title: "Chat with Riders In-App",
    text: "Stay updated and coordinate easily. Message your rider directly from the app.",
  },
  {
    icon: "▰",
    title: "Get paid per delivery",
    text: "Get matched with available riders in your area for faster pickups and deliveries.",
  },
  {
    icon: "◎",
    title: "Find Nearby Riders Instantly",
    text: "Get matched with available riders in your area for faster pickups and deliveries.",
  },
];

const steps = [
  ["01", "Download the App", "Go to the App Store or Google Play and search for Movva. Tap install to download."],
  ["02", "Create Your Account", "Open the app and sign up using your email or phone number. Choose a secure password."],
  ["03", "Set Your Delivery Preferences", "Add your name, address, preferred delivery options, and location services."],
  ["04", "Explore the Dashboard", "Browse delivery options, track parcels, or book a pickup from your home screen."],
  ["05", "Book Your First Delivery", "Enter parcel details, choose a delivery time, and confirm your request."],
  ["06", "Track in Real Time", "Watch your delivery live and get updates until it arrives safely."],
];

const testimonials = [
  ["Lagos Business Owner", "Movva has made dispatch easier for my small business. No more calling riders one by one."],
  ["Ikeja Shop Owner", "I love the secure payments and how fast the riders respond. My customers are happier."],
  ["Abuja Entrepreneur", "Real-time tracking keeps every order visible from pickup to drop-off. Finally, transparency."],
  ["Kano SME Founder", "We run multiple store locations and Movva keeps everything in sync. Saves us hours weekly."],
];

const storeLinks = {
  googlePlay: "https://play.google.com/store/apps/details?id=com.movva.app",
  appStore: "https://apps.apple.com/app/id1234567890",
};

const iconFiles = {
  googlePlay: "google-play-badge.png",
  appStore: "app-store-badge.png",
  upload: "upload-camera-icon.png",
  location: "location-pin-icon.png",
  avatar: "testimonial-avatar.png",
  phoneSteps: "phone-steps.png",
};

const socialLinks = [
  ["https://facebook.com/movva", "facebook-color-svgrepo-com 1.png", "Facebook"],
  ["https://linkedin.com/company/movva", "linkedin-color-svgrepo-com 1.png", "LinkedIn"],
  ["https://youtube.com/@movva", "youtube-color-svgrepo-com 1.png", "YouTube"],
  ["mailto:jjohnAdeleke91@gmail.com", "gmail-icon-logo-svgrepo-com 1.png", "Email"],
  ["https://x.com/movva", "x_twitter.png", "X"],
];

const heroScreens = [
  ["movva-rider-app.jpg", "Movva rider app"],
  ["movva-user-app.jpg", "Movva user app"],
];

const appScreenshots = [
  ["Screenshot_20260603_193234 (1).jpg", "Movva app delivery screenshot"],
  ["Screenshot_20260603_193313 (1).jpg", "Movva app tracking screenshot"],
];

function AssetImage({ src, alt, className, fallback }) {
  const [failed, setFailed] = useState(false);

  if (!src) return fallback ?? null;
  if (failed) return fallback ?? null;

  return (
    <img
      className={className}
      src={asset(src)}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}

function PhoneShot({ src, alt, className = "" }) {
  return (
    <div className={`phone-shot ${className}`}>
      <AssetImage src={src} alt={alt} />
    </div>
  );
}

function StoreBadges({ center = false, onOpenWaitlist }) {
  const handleStoreClick = () => {
    onOpenWaitlist?.("store");
  };

  return (
    <div className={`store-row ${center ? "center" : ""}`} aria-label="Download links">
      <button type="button" className="store-link coming-soon" aria-label="Google Play coming soon" onClick={handleStoreClick}>
        <AssetImage
          src={iconFiles.googlePlay}
          alt="Get it on Google Play"
          className="store-image"
          fallback={<span className="store-badge">Get it on<strong>Google Play</strong></span>}
        />
        <span className="coming-soon-tag" aria-hidden="true">Coming soon</span>
      </button>
      <button type="button" className="store-link coming-soon" aria-label="App Store coming soon" onClick={handleStoreClick}>
        <AssetImage
          src={iconFiles.appStore}
          alt="Download on the App Store"
          className="store-image"
          fallback={<span className="store-badge">Download on the<strong>App Store</strong></span>}
        />
        <span className="coming-soon-tag" aria-hidden="true">Coming soon</span>
      </button>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social links">
      {socialLinks.map(([url, file, label]) => (
        <a href={url} aria-label={label} key={label} target="_blank" rel="noopener noreferrer">
          <AssetImage src={file} alt="" className="social-icon" />
        </a>
      ))}
    </div>
  );
}

function Header({ onOpenMenu, onOpenWaitlist }) {
  return (
    <header className="site-header" id="top">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top">Movva</a>
        <div className="nav-actions">
          <a className="support-link" href="#support">Support</a>
          <button className="btn btn-primary" onClick={onOpenWaitlist}>Get Started</button>
          <button className="icon-grid" type="button" onClick={onOpenMenu} aria-label="Open menu">
            {Array.from({ length: 9 }).map((_, index) => <span key={index} />)}
          </button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-copy">
            <span className="hero-pill">Real-time delivery across Nigeria</span>
            <h1>Fast. Secure. Real-Time Delivery, Anytime.</h1>
            <p>
              Movva connects you with nearby riders for quick, real-time deliveries
              with tracking, secure payments, and in-app coordination.
            </p>
            <div className="waitlist-inline">
              <label className="sr-only" htmlFor="hero-email">Email address</label>
              <input
                id="hero-email"
                name="email"
                type="email"
                placeholder="Join the waiting list"
                onClick={onOpenWaitlist}
              />
              <button className="btn btn-primary" type="button" onClick={onOpenWaitlist}>Join Waitlist</button>
            </div>
            <StoreBadges onOpenWaitlist={onOpenWaitlist} />
          </div>
          <div className="hero-visual" aria-hidden="true">
            {heroScreens.map(([src, alt], index) => (
              <PhoneShot
                key={src}
                src={src}
                alt={alt}
                className={index === 0 ? "phone-shot-rider" : "phone-shot-user"}
              />
            ))}
          </div>
        </div>
      </section>
    </header>
  );
}

function OfferSection({ onOpenWaitlist }) {
  return (
    <section className="section offer-section" id="offer">
      <div className="section-title">
        <h2>What we offer</h2>
      </div>
      <div className="offer-grid">
        <div className="offer-media">
          <img src={asset("Frame 2147227048.png")} alt="Movva rider delivery preview" />
        </div>
        <ul className="feature-list" aria-label="Movva features">
          {offers.map((offer) => <li key={offer}>{offer}</li>)}
        </ul>
        {featureCards.map((card) => (
          <article className="feature-card" key={card.title}>
            <AssetImage
              src={card.title.includes("Upload") ? iconFiles.upload : card.title.includes("Nearby") ? iconFiles.location : ""}
              alt=""
              className="feature-image-icon"
            />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
      <div className="cta-strip">
        <p><strong>Ready to deliver smarter?</strong> Join the Movva community.</p>
        <div>
          <button className="btn btn-dark" type="button" onClick={() => onOpenWaitlist("store")}>Download App</button>
          <button className="btn btn-outline" type="button" onClick={onOpenWaitlist}>Join Waitlist</button>
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="section steps-section" id="steps">
      <h2>Easy Steps to Download and Use the Movva App</h2>
      <div className="steps-layout">
        <div className="phone-frame">
          <AssetImage
            src={iconFiles.phoneSteps}
            alt="Movva app interface"
            fallback={<img src={asset("Frame 2147227013-1.png")} alt="Movva app interface" />}
          />
        </div>
        <ol className="steps-list">
          {steps.map(([number, title, text], index) => (
            <li className={index === 1 ? "active" : ""} key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function AppPreviewSection() {
  return (
    <section className="section app-preview-section" aria-label="Movva app screenshots">
      <div className="app-preview-copy">
        <span className="hero-pill">Built for every delivery</span>
        <h2>Manage bookings, riders, and delivery updates from one app.</h2>
        <p>
          Movva gives customers and riders the screens they need to coordinate
          pickups, track progress, and keep each delivery moving.
        </p>
      </div>
      <div className="app-preview-grid">
        {appScreenshots.map(([src, alt], index) => (
          <PhoneShot key={src} src={src} alt={alt} className={index === 1 ? "is-lowered" : ""} />
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [offset, setOffset] = useState(0);
  const visibleCards = useMemo(() => {
    return testimonials.map((_, index) => testimonials[(index + offset + testimonials.length) % testimonials.length]);
  }, [offset]);

  return (
    <section className="testimonials" aria-label="Customer testimonials">
      <div className="testimonial-track">
        {visibleCards.map(([name, text], index) => (
          <article className="testimonial-card" key={`${name}-${index}`}>
            <AssetImage src={iconFiles.avatar} alt="" className="testimonial-avatar" />
            <strong>{name}</strong>
            <p>{text}</p>
            <span>★★★★★</span>
          </article>
        ))}
      </div>
      <div className="slider-controls">
        <button type="button" onClick={() => setOffset((value) => value - 1)} aria-label="Previous testimonial">←</button>
        <button type="button" onClick={() => setOffset((value) => value + 1)} aria-label="Next testimonial">→</button>
      </div>
    </section>
  );
}

function MenuOverlay({ open, onClose, onOpenWaitlist }) {
  if (!open) return null;

  const closeAfterClick = () => onClose();

  return (
    <div className="menu-overlay">
      <div className="menu-panel" role="dialog" aria-modal="true" aria-label="Movva menu">
        <div className="menu-top">
          <a className="brand" href="#top" onClick={closeAfterClick}>Movva</a>
          <div>
            <a className="support-link desktop-only" href="#support" onClick={closeAfterClick}>Support</a>
            <button className="btn btn-primary desktop-only" onClick={onOpenWaitlist}>Get Started</button>
            <button className="close-btn" type="button" onClick={onClose} aria-label="Close menu">×</button>
          </div>
        </div>
        <div className="menu-content">
          <nav className="menu-links" aria-label="Menu links">
            <a href="#top" onClick={closeAfterClick}>Home</a>
            <a href="#offer" onClick={closeAfterClick}>About Movva</a>
            <a href="#support" onClick={closeAfterClick}>Contact us</a>
            <a href="#download" onClick={closeAfterClick}>FAQ</a>
            <a href="#download" onClick={closeAfterClick}>Terms & Conditions</a>
            <a href="#download" onClick={closeAfterClick}>Privacy Policy</a>
          </nav>
          <div className="menu-badges"><StoreBadges onOpenWaitlist={onOpenWaitlist} /></div>
          <div className="menu-options">
            <article><div><h3>Join Movva today</h3><p>Join the Movva community and experience seamless delivery management across Nigeria.</p></div></article>
            <article><div><h3>Become a Movva driver</h3><p>Unlock your earning potential with Movva and grow with Nigeria’s trusted delivery platform.</p></div></article>
            <article><div><h3>Smart Business Accounts for Bulk Deliveries</h3><p>Simplify your logistics with business accounts for bulk delivery, tracking, and seamless payments.</p></div></article>
          </div>
        </div>
      </div>
    </div>
  );
}

function WaitlistModal({ open, onClose, onSubmit, message, messageType, isSubmitting }) {
  if (!open) return null;

  return (
    <div className="waitlist-modal">
      <div className="waitlist-card" role="dialog" aria-modal="true" aria-labelledby="waitlist-title">
        <button className="close-btn" type="button" onClick={onClose} aria-label="Close waitlist">×</button>
        <div className="waitlist-hero">
          {heroScreens.map(([src, alt], index) => (
            <PhoneShot
              key={src}
              src={src}
              alt={alt}
              className={index === 0 ? "phone-shot-rider" : "phone-shot-user"}
            />
          ))}
        </div>
        <form className="waitlist-form" onSubmit={onSubmit}>
          <h3 id="waitlist-title">Join the waiting list</h3>
          <p>Tell us how you want to use Movva and we’ll notify you when early access opens.</p>
          <label>
            Full name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Phone number <span>Optional</span>
            <input name="phone" type="tel" placeholder="+234 800 000 0000" />
          </label>
          <label>
            I am joining as
            <select name="userType" required defaultValue="">
              <option value="" disabled>Select one</option>
              <option value="user">Individual</option>
              <option value="business">Business Owner</option>
              <option value="rider">Rider/Driver</option>
            </select>
          </label>
          <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </button>
          <p className={`form-message ${messageType === "error" ? "error" : ""}`} aria-live="polite">
            {message}
          </p>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formMessageType, setFormMessageType] = useState("success");
  const [isSubmittingWaitlist, setIsSubmittingWaitlist] = useState(false);
  const currentYear = new Date().getFullYear();

  const saveWaitlistEntry = (entry) => {
    const current = JSON.parse(localStorage.getItem("movvaWaitlist") || "[]");
    localStorage.setItem("movvaWaitlist", JSON.stringify([...current, entry]));
  };

  const handleWaitlistSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const entry = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      userType: String(formData.get("userType") || ""),
    };

    if (!waitlistEndpoint) {
      setFormMessageType("error");
      setFormMessage("Waitlist service is not configured yet.");
      return;
    }

    setIsSubmittingWaitlist(true);
    setFormMessage("");

    try {
      const response = await fetch(waitlistEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        throw new Error(errorBody?.message || "Unable to join the waitlist right now.");
      }

      saveWaitlistEntry(entry);
      form.reset();
      setFormMessageType("success");
      setFormMessage("You are on the list. We’ll be in touch soon.");
      setWaitlistOpen(true);
    } catch (error) {
      setFormMessageType("error");
      setFormMessage(error.message || "Unable to join the waitlist right now.");
    } finally {
      setIsSubmittingWaitlist(false);
    }
  };

  const openWaitlist = (source) => {
    setFormMessage(source === "store" ? "Coming soon. Please fill the waiting list to get notification." : "");
    setFormMessageType("success");
    setWaitlistOpen(true);
    setMenuOpen(false);
  };

  return (
    <>
      <Header
        onOpenMenu={() => setMenuOpen(true)}
        onOpenWaitlist={openWaitlist}
      />
      <main>
        <OfferSection onOpenWaitlist={openWaitlist} />
        <StepsSection />
        <Testimonials />
        <AppPreviewSection />
        <section className="download-card" id="download">
          <h2>Download Our App Today!</h2>
          <p>Get trusted local riders, live tracking, secure checkout, and stress-free deliveries from one smart app.</p>
          <StoreBadges center onOpenWaitlist={openWaitlist} />
          <button className="btn btn-primary" onClick={openWaitlist}>Join Waiting List</button>
        </section>
      </main>
      <footer className="footer" id="support">
        <div>
          <p className="footer-label">About</p>
          <h2>Movva</h2>
          <p>Movva delivers fast, secure, and affordable courier services across Nigeria.</p>
          <SocialLinks />
        </div>
        <div>
          <p className="footer-label">Movva</p>
          <a href="#offer">Join Movva today</a>
          <a href="#top">About us</a>
          <a href="#support">Contact us</a>
          <a href="#download">Terms and Conditions</a>
          <a href="#download">Privacy policy</a>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <p>Email: jjohnAdeleke91@gmail.com</p>
          <p>Tel- Phone: +234 907 947 2099</p>
          <p>Location: Lagos, Nigeria</p>
        </div>
        <small>© {currentYear} Quantiv Digital. All rights reserved.</small>
      </footer>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} onOpenWaitlist={openWaitlist} />
      <WaitlistModal
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
        onSubmit={handleWaitlistSubmit}
        message={formMessage}
        messageType={formMessageType}
        isSubmitting={isSubmittingWaitlist}
      />
    </>
  );
}
