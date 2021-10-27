import {
  MdOutlineHouse,
  MdOutlinePhone,
  MdTimer,
  MdOutlineEmail,
  MdOutlineFacebook
} from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="w-3/4 mx-auto pb-7 mt-24 md:flex gap-x-3">
      <div className="w-full md:w-1/2 lg:w-2/5">
        <table className="overflow-x-hidden w-full">
          <tbody>
            <tr className="border-b-2">
              <td className="p-1 sm:p-2 md:p-4">
                <MdOutlineHouse className="w-8 h-5 fill-current dark:text-white" />
              </td>
              <td className="py-1 sm:py-3 md:py-4 md:px-2">
                <span className="dark:text-gray-50">Main office:</span> <br></br>
                <span className="dark:text-gray-50">
                  Bukidnon State University, Malaybalay City
                </span>
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="p-1 sm:p-2 md:p-4">
                <MdOutlinePhone className="w-8 h-5 fill-current dark:text-white" />
              </td>
              <td className="py-1 sm:py-3 md:py-4 md:px-2">
                <span className="dark:text-gray-50">For questions and inquiries:</span> <br></br>
                <span className="dark:text-gray-50">
                  +639978276666
                </span>
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="p-1 sm:p-2 md:p-4">
                <MdTimer className="w-8 h-5 fill-current dark:text-white" />
              </td>
              <td className="py-1 sm:py-3 md:py-4 md:px-2">
                <span className="dark:text-gray-50">Business hours:</span> <br></br>
                <span className="dark:text-gray-50">
                  Monday to Saturday: 8:30am - 5:00pm
                </span>
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="p-1 sm:p-2 md:p-4">
                <MdOutlineEmail className="w-8 h-5 fill-current dark:text-white" />
              </td>
              <td className="py-1 sm:py-3 md:py-4 md:px-2">
                <span className="dark:text-gray-50">Send us an email:</span><br></br>
                <a href="mailto:llanitaariel@gmail.com" className="dark:text-gray-50">bsuemc@gmail.com</a>
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="p-1 sm:p-2 md:p-4">
                <MdOutlineFacebook className="w-8 h-5 fill-current dark:text-white" />
              </td>
              <td className="py-1 sm:py-3 md:py-4 md:px-2">
                <a href="https://www.facebook.com/bsuemp.cooperative" className="text-decoration-none" target="_blank" rel='noreferrer'>
                  <span className="dark:text-gray-50">Visit our Facebook page:</span> <br></br>
                  <span className="dark:text-gray-50">facebook.com/bsuemp.cooperative</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full md:w-1/2 lg:w-3/5">
        <iframe className="w-full h-80 md:h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.4485110115115!2d125.1235305498214!3d8.157485125958978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffa986e88ba5d3%3A0x37fbb668eb13f0fd!2sBukidnon%20State%20University!5e0!3m2!1sen!2sph!4v1622724843723!5m2!1sen!2sph" title='BSU EMC location' allowFullScreen="" loading="lazy"></iframe>
      </div>
    </footer>
  )
}