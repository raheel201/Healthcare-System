# 🏥 Jhilmil Homecare - Healthcare Dashboard

A modern, responsive healthcare dashboard built with React, featuring patient management, service booking, and comprehensive analytics.

## 🚀 Features

### 📊 Dashboard
- **Interactive Charts**: Line, Bar, Pie, and Doughnut charts using Chart.js
- **Real-time Statistics**: Patient count, appointments, revenue tracking
- **Time Filters**: 7 days, 30 days, 90 days data filtering
- **Responsive Design**: Works seamlessly on all devices

### 👥 Patient Management
- **Patient Directory**: Complete patient information management
- **Advanced Search**: Search by name, email, or phone number
- **Smart Filters**: Filter by status (active/inactive) and type (regular/premium)
- **Patient Details**: Comprehensive patient profile with medical history
- **Modal Interface**: Quick patient details view

### 🏥 Service Management
- **Service Catalog**: Browse all available healthcare services
- **Category Filtering**: Filter by consultation, laboratory, imaging, therapy, etc.
- **Availability Status**: Real-time service availability
- **Pricing Information**: Transparent pricing and duration details
- **One-Click Booking**: Instant service booking functionality

### 📅 Booking System
- **Smart Booking Form**: Intuitive appointment scheduling
- **Form Validation**: Real-time validation with error handling
- **Status Management**: Track booking status (pending → confirmed → completed)
- **Persistent Storage**: Bookings saved with Redux Persist
- **Booking History**: Complete appointment history

### 🎨 UI/UX Features
- **Dark/Light Mode**: Toggle between themes with localStorage persistence
- **Fixed Layout**: Professional dashboard layout with fixed topbar and sidebar
- **Loading States**: Beautiful animated loader during app initialization
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Subtle transitions and hover effects

## 🛠️ Tech Stack

- **Frontend**: React 18 (Functional Components)
- **Routing**: React Router v6
- **State Management**: Redux Toolkit + Redux Persist
- **Styling**: Tailwind CSS
- **Charts**: Chart.js + react-chartjs-2
- **Theme Management**: React Context API
- **Build Tool**: Vite
- **Code Quality**: ESLint

## 📁 Project Structure

```
src/
├── App.jsx                 # Main application component
├── store/                  # Redux store configuration
│   ├── store.js           # Store setup with persistence
│   └── bookingSlice.js    # Booking state management
├── context/               # React Context providers
│   └── ThemeContext.jsx   # Theme management
├── pages/                 # Main page components
│   ├── Dashboard.jsx      # Analytics dashboard
│   ├── Patients.jsx       # Patient management
│   ├── Services.jsx       # Service catalog
│   ├── MyBookings.jsx     # Booking management
│   └── PatientDetail.jsx  # Patient details page
├── components/            # Reusable components
│   ├── common/           # Generic UI components
│   │   ├── Input.jsx     # Form input component
│   │   ├── Button.jsx    # Button with variants
│   │   ├── TextArea.jsx  # Textarea component
│   │   ├── Card.jsx      # Card container
│   │   ├── Modal.jsx     # Modal dialog
│   │   └── Select.jsx    # Dropdown select
│   ├── layout/           # Layout components
│   │   ├── Topbar.jsx    # Fixed header
│   │   ├── Sidebar.jsx   # Navigation sidebar
│   │   └── MainLayout.jsx # Main layout wrapper
│   ├── dashboard/        # Dashboard specific
│   │   ├── ChartCard.jsx # Chart container
│   │   ├── StatCard.jsx  # Statistics card
│   │   └── DashboardCharts.jsx # Chart components
│   ├── patients/         # Patient components
│   │   ├── PatientList.jsx    # Patient listing
│   │   ├── PatientFilter.jsx  # Search & filters
│   │   └── PatientCard.jsx    # Patient card
│   ├── services/         # Service components
│   │   ├── ServiceList.jsx    # Service listing
│   │   ├── ServiceCard.jsx    # Service card
│   │   └── ServiceFilter.jsx  # Service filters
│   └── booking/          # Booking components
│       ├── BookingForm.jsx    # Appointment form
│       └── BookingList.jsx    # Booking history
├── data/                 # Mock data
│   ├── patients.js       # Patient mock data
│   ├── services.js       # Services mock data
│   └── mockChart.js      # Chart data
└── styles/               # Global styles
    └── globals.css       # Tailwind utilities
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Healthcare System"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 🎯 Key Features Explained

### Performance Optimizations
- **React.memo**: All components are memoized to prevent unnecessary re-renders
- **useMemo**: Expensive calculations like filtering are memoized
- **useCallback**: Event handlers are memoized to maintain referential equality
- **Code Splitting**: Components are organized for optimal bundle splitting

### State Management
- **Redux Toolkit**: Simplified Redux with modern patterns
- **Redux Persist**: Automatic state persistence to localStorage
- **Immutable Updates**: Safe state mutations with Immer

### Responsive Design
- **Mobile First**: Designed for mobile devices first
- **Breakpoint System**: Tailwind's responsive breakpoints
- **Flexible Layouts**: CSS Grid and Flexbox for complex layouts

### Accessibility
- **Semantic HTML**: Proper HTML structure
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color schemes

## 🎨 Customization

### Theme Colors
The application uses a teal color scheme. To change colors, update:
- `tailwind.config.js` - Primary color palette
- `src/styles/globals.css` - CSS custom properties
- Component-specific color classes

### Adding New Features
1. Create components in appropriate folders
2. Add routes in `App.jsx`
3. Update navigation in `Sidebar.jsx`
4. Add Redux slices if state management needed


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

