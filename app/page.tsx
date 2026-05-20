import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { CoursesSection } from "./components/CoursesSection";
import { EnrollmentForm } from "./components/EnrollmentForm";
import { FeesSection } from "./components/FeesSection";
import { InstructorSection } from "./components/InstructorSection";
import { LocationsSection } from "./components/LocationsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { ImportantInfoSection } from "./components/ImportantInfoSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        {/* ════ Hero ════ */}
        <HeroSection />

        {/* ════ Courses ════ */}
        <CoursesSection />

        {/* ════ Enrollment Form ════ */}
        <EnrollmentForm />

        {/* ════ Fees ════ */}
        <FeesSection />

        {/* ════ Instructor / About ════ */}
        <InstructorSection />

        {/* ════ Locations / Branches ════ */}
        <LocationsSection />

        {/* ════ Reviews ════ */}
        <ReviewsSection />

        {/* ════ Important Info ════ */}
        <ImportantInfoSection />
      </main>
      <Footer />
    </>
  );
}
