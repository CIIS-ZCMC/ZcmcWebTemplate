# ZCMC Web Template

This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules.

## Features

- **Single Sign-On (SSO):** Integrated with the ZCMC User Management Information System.
- **Configuration for Development and Production:** Ensure to check the configuration based on your current setup.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

## Quick Start

To get started with the ZCMC Web Template, follow these steps:

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd zcmc-web-template
   ```

2. **Remove the existing remote origin:**

   ```bash
   git remote remove origin
   ```

3. **Add your new remote origin:**

   ```bash
   git remote add origin <your-new-repo-url>
   ```

4. **Install the dependencies:**

   ```bash
   npm install
   ```

5. **Configuration:**

   Make sure to check the configuration files for development and production environments and adjust them according to your current setup.

6. **Start the development server:**

   ```bash
   npm run dev
   ```

## API Integration

This project is already integrated with the ZCMC API template, which provides the backend support for SSO and user management.

## Contributing

Contributions are welcome! Please follow the standard practices for making contributions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
