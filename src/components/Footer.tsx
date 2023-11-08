import { useState } from 'react';
import { StylishButton } from './StylishButton';
import { StylishLink } from './StylishLink';
import classNames from 'classnames';

const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const Footer = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!formValues.name.trim()) {
      e.preventDefault();
      setErrors(prev => {
        return {
          ...prev,
          name: true,
        };
      });
    }

    if (!emailRegEx.test(formValues.email)) {
      e.preventDefault();
      setErrors(prev => {
        return {
          ...prev,
          email: true,
        };
      });
    }
  };

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues(prev => {
      return {
        ...prev,
        name: e.target.value,
      };
    });

    if (errors.name) {
      setErrors(prev => {
        return {
          ...prev,
          name: false,
        };
      });
    }
  };

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues(prev => {
      return {
        ...prev,
        email: e.target.value,
      };
    });

    if (errors.email) {
      setErrors(prev => {
        return {
          ...prev,
          email: false,
        };
      });
    }
  };

  const handleMessageInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues(prev => {
      return {
        ...prev,
        message: e.target.value,
      };
    });
  };

  return (
    <>
      <h2 className="font-space-grotesk text-dark-grey col-span-2 col-start-2 text-[32px] font-bold xl:col-span-5 xl:col-start-2">
        Contact us
      </h2>

      <hr className="col-span-full mb-[48px] border-0 md:mb-[56px]" />

      <form className="font-space-mono col-span-2 col-start-2 text-[#7E7E83] md:col-span-6 md:col-start-2 xl:col-span-5 xl:col-start-2">
        <input
          className={classNames(
            'mb-[16px] w-full rounded-[8px] border-2 bg-[#F8F8FA] px-[16px] py-[14px] hover:border-[#D5D7DE] hover:text-[#292929] focus:border-[#111] focus:outline-none',
            {
              'border-red-500': errors.name,
              'hover:border-red-500': errors.name,
              'focus:border-red-500': errors.name,
            },
          )}
          type="text"
          placeholder="Name"
          value={formValues.name}
          onChange={handleNameInput}
          required
        />
        <input
          className={classNames(
            'mb-[16px] w-full rounded-[8px] border-2 bg-[#F8F8FA] px-[16px] py-[14px] hover:border-[#D5D7DE] hover:text-[#292929] focus:border-[#111] focus:outline-none',
            {
              'border-red-500': errors.email,
              'hover:border-red-500': errors.email,
              'focus:border-red-500': errors.email,
            },
          )}
          type="email"
          placeholder="E-mail"
          value={formValues.email}
          onChange={handleEmailInput}
        />
        <textarea
          className="mb-[32px] h-[148px] w-full resize-none rounded-[8px] border-2 bg-[#F8F8FA] px-[16px] py-[14px] text-[#292929] focus:outline-none"
          placeholder="Message"
          value={formValues.message}
          onChange={handleMessageInput}
        />
        <div className="col-span-2 col-start-2">
          <StylishButton onClick={handleSubmit}>Send</StylishButton>
        </div>
      </form>

      <hr className="col-span-full mb-[48px] border-0 md:mb-[80px] xl:hidden" />

      <div className="font-space-mono col-span-2 col-start-2 text-[#191919] md:col-span-6 md:col-start-2 xl:col-span-6 xl:col-start-8 xl:row-start-3">
        <p className="font-space-grotesk mb-[8px] text-[14px] leading-[140%] text-[#9393A3]">
          Phone
        </p>
        <StylishLink href="tel:+123455555555">+1 234 5555-55-55</StylishLink>

        <hr className="mb-[24px] border-0" />

        <p className="font-space-grotesk mb-[8px] text-[14px] leading-[140%] text-[#9393A3]">
          Email
        </p>
        <StylishLink href="mailto:hello@nothing.com">
          hello@nothing.com
        </StylishLink>

        <hr className="mb-[24px] border-0" />

        <p className="font-space-grotesk mb-[8px] text-[14px] leading-[140%] text-[#9393A3]">
          Address
        </p>
        <StylishLink href="https://maps.app.goo.gl/f2RXypRqWkqCduWv9">
          400 first ave.
          <br />
          suite 700
          <br />
          Minneapolis, MN 55401
        </StylishLink>
      </div>
    </>
  );
};
