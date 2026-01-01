# GitBook-Style Layout Implementation Requirements

## Overview
We need to implement a GitBook-inspired documentation layout for this Markdoc-based personal profile website. The desired layout features a collapsible sidebar navigation on the left and main content area on the right, similar to modern documentation sites like Stripe's documentation and GitBook.

## Background Context
- **Project**: Next.js 16 + Markdoc personal profile website
- **Current State**: Single-page scrollable profile with traditional sections (About, Experience, Publications, Contact)
- **Technology Stack**: Next.js, Markdoc, React, TypeScript, Tailwind CSS, shadcn/ui components

## Feature Request Details

### Desired Layout Structure
We want to transform the current single-page layout into a documentation-style interface with:

1. **Left Sidebar Navigation**
   - Collapsible/toggleable sidebar (can be hidden/shown)
   - Navigation tree structure for easy content discovery
   - Active section highlighting
   - Smooth scrolling to sections or page navigation
   - Mobile-responsive (hamburger menu on small screens)

2. **Right Content Area**
   - Main content display area
   - Markdown/Markdoc rendered content
   - Clean, readable typography
   - Responsive width that adjusts based on sidebar state

### Reference Implementation
The target UI pattern is demonstrated in GitBook's documentation:
- **Reference URL**: https://www.gitbook.com/blog/how-to-write-technical-documentation-with-examples
- **Screenshot**: ![GitBook Layout Example](https://github.com/user-attachments/assets/28296a01-0095-405a-849c-70066d4c75ed)

Key characteristics of the reference layout:
- Left sidebar with hierarchical navigation
- Expandable/collapsible sections in sidebar
- Main content area with clean typography
- Responsive design that works on all devices
- Professional, modern aesthetic

### Use Case
This layout pattern is particularly effective for personal profile/portfolio websites because:
- **Information Architecture**: Visitors can quickly navigate to specific sections of interest (About, Experience, Projects, Skills, etc.)
- **Discoverability**: All available content is visible in the sidebar, making it easy to explore
- **Professional Presentation**: Documentation-style layouts convey expertise and attention to detail
- **Scalability**: Easy to add new sections or pages as the profile grows

### Technical Considerations

#### Markdoc Integration
Since this project uses Markdoc (created by Stripe for their documentation), this layout pattern should be achievable:
- Markdoc supports advanced layout components
- Can leverage Markdoc's partials and includes for modular content
- Custom components can be created for sidebar navigation
- Markdoc's schema system allows for structured content organization

#### Current Architecture
The website currently uses:
- **Single Route**: `/` (app/page.tsx) - monolithic single-page layout
- **Markdown Content**: `/content/about.md` - Markdoc content (currently unused in main page)
- **Components**: Basic UI components (Button, Card, Badge) available
- **Styling**: Tailwind CSS with custom theme support

### Implementation Suggestions

#### Approach 1: Multi-Page Structure
Convert sections to separate routes with sidebar navigation:
```
/                  → Landing/Overview
/about             → About section
/experience        → Experience section
/publications      → Publications section
/contact           → Contact section
```

#### Approach 2: Single-Page with Sidebar
Keep single-page structure but add:
- Persistent sidebar with section links
- Smooth scrolling to sections
- Active section tracking based on scroll position

#### Approach 3: Hybrid Approach
- Main profile on `/` with sidebar navigation
- Additional detailed pages for deeper content (e.g., `/blog`, `/projects/[slug]`)

### UI/UX Requirements

1. **Desktop (≥1024px)**
   - Sidebar visible by default (240-280px width)
   - Toggle button to collapse/expand sidebar
   - Content area adjusts responsively

2. **Tablet (768px-1023px)**
   - Sidebar collapsible by default
   - Overlay sidebar when expanded
   - Toggle button in header

3. **Mobile (<768px)**
   - Hamburger menu in header
   - Full-screen overlay sidebar when open
   - Smooth animations for open/close

### Design Specifications
- **Sidebar Background**: Subtle background color differentiation
- **Active Link**: Clear visual indicator for current section
- **Typography**: Maintain current font system (Geist/Geist Mono)
- **Transitions**: Smooth animations (200-300ms) for sidebar toggle
- **Accessibility**: Keyboard navigation support, ARIA labels, focus management

### Success Criteria
- ✅ Sidebar navigation is intuitive and responsive
- ✅ Content is easily discoverable through sidebar
- ✅ Layout works seamlessly across all device sizes
- ✅ Maintains current brand aesthetics and color scheme
- ✅ Markdoc content renders correctly in the new layout
- ✅ Performance is not degraded (maintain fast page loads)

## Additional Notes
- This is inspired by Stripe's documentation (the creators of Markdoc), which suggests this pattern is well-suited for Markdoc projects
- Consider leveraging existing shadcn/ui components if applicable (Sheet, ScrollArea, etc.)
- May need to install additional dependencies for sidebar functionality (though prefer using existing Radix UI components)

## Questions for Dev Partner
1. What's the preferred approach: multi-page, single-page with sidebar, or hybrid?
2. Should we use file-system routing for content or keep current structure?
3. Any preference for state management for sidebar toggle (React Context, URL params, localStorage)?
4. Should we create new Markdoc components/tags for this layout structure?
5. Timeline and priority for this feature?

---

**Prepared for**: Development Partner  
**Project**: v0-markdoc-profile  
**Date**: January 1, 2026  
**Status**: Requirements Draft - Awaiting Dev Partner Review
