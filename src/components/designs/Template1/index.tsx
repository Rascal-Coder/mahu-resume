'use client';
import React, { ChangeEvent, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { Image } from '@nextui-org/react';
import { saveAs } from 'file-saver';
import { AnimatePresence, motion } from 'framer-motion';
import * as htmlToImage from 'html-to-image';
import { BiSolidBookmarks } from 'react-icons/bi';
import { BsFiletypePdf, BsFiletypePng, BsFiletypeJpg, BsFiletypeSvg } from 'react-icons/bs';
import { FaTrash, FaPenToSquare, FaPencil, FaPlus } from 'react-icons/fa6';

import { Education, EducationField, Experience, ExperienceField, Skill, SkillField } from './types';
const Template1 = () => {
  const [isEdit, setIsEdit] = useState(false);

  const resumeRef = useRef(null);

  const [imageAsset, setImageAsset] = useState({
    isImageLoading: false,
    imageURL: '',
  });

  const [formData, setFormData] = useState({
    fullname: 'Karen Richards',
    professionalTitle: 'Professional Title',
    personalDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alia minus est culpa id corrupti nobis ullam harum, porro veniam facilis, obcaecati nulla magnam beatae quae at eos! Qui, similique laboriosam?`,
    refererName: 'Sara Taylore',
    refererRole: 'Director | Company Name',
    mobile: '+91 0000-0000',
    email: 'urname@gmail.com',
    website: 'urwebsite.com',
    address: 'your street address, ss, street, city/zip code - 1234',
  });
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      year: '2012 - 2014',
      title: 'Job Position Here',
      companyAndLocation: 'Company Name / Location here',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatibus minima tenetur nostrum quo aliquam dolorum incidunt.',
    },
    {
      year: '2012 - 2014',
      title: 'Job Position Here',
      companyAndLocation: 'Company Name / Location here',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatibus minima tenetur nostrum quo aliquam dolorum incidunt.',
    },
    {
      year: '2012 - 2014',
      title: 'Job Position Here',
      companyAndLocation: 'Company Name / Location here',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatibus minima tenetur nostrum quo aliquam dolorum incidunt.',
    },
  ]);

  const [skills, setSkills] = useState<Skill[]>([
    {
      title: 'skill1',
      percentage: '75',
    },
    {
      title: 'skill2',
      percentage: '75',
    },
    {
      title: 'skill3',
      percentage: '75',
    },
    {
      title: 'skill4',
      percentage: '75',
    },
    {
      title: 'skill5',
      percentage: '75',
    },
  ]);
  const [education, setEducation] = useState<Education[]>([
    {
      major: 'ENTER YOUR MAJOR',
      university: 'Name of your university / college',
    },
  ]);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleEditable = () => {
    setIsEdit(!isEdit);
    const inputs = document.querySelectorAll('input');
    const textarea = document.querySelectorAll('textarea');

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].readOnly = !inputs[i].readOnly;
    }

    for (let i = 0; i < textarea.length; i++) {
      textarea[i].readOnly = !textarea[i].readOnly;
    }
  };

  const handleFileSelect = async (event: ChangeEvent<HTMLInputElement>) => {
    setImageAsset((prevAsset) => ({ ...prevAsset, isImageLoading: true }));
    const input = event.target;
    if (input && input.files) {
      const file = input.files[0];
      if (file && isAllowed(file)) {
        const reader = new FileReader();

        reader.onload = function (loadEvent) {
          const dataURL = loadEvent.target?.result as string;
          setImageAsset((prevAsset) => ({
            ...prevAsset,
            imageURL: dataURL,
          }));
        };

        reader.readAsDataURL(file);
      } else {
        toast.error('Invalid File Format');
      }
    }
  };

  const isAllowed = (file: File) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    return allowedTypes.includes(file.type);
  };

  const deleteImageObject = () => {
    setImageAsset((prevAsset) => ({
      ...prevAsset,
      imageURL: '',
    }));
  };

  const handleExpChange = (index: number, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedExperiences = [...experiences];
    updatedExperiences[index][name as ExperienceField] = value;
    setExperiences(updatedExperiences);
  };

  const removeExperience = (index: number) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  const addExperience = () => {
    const updatedExperiences = [
      ...experiences,
      {
        year: '2012 - 2014',
        title: 'Job Position Here',
        companyAndLocation: 'Company Name / Location here',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatibus minima tenetur nostrum quo aliquam dolorum incidunt.',
      },
    ];
    setExperiences(updatedExperiences);
  };

  const handleSkillsChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedSkills = [...skills];
    updatedSkills[index][name as SkillField] = value;
    setSkills(updatedSkills);
  };

  const removeSkill = (index: number) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    const updatedSkills = [
      ...skills,
      {
        title: 'skill1',
        percentage: '75',
      },
    ];
    setSkills(updatedSkills);
  };

  const handleEducationChange = (index: number, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedEdu = [...education];
    updatedEdu[index][name as EducationField] = value;
    setEducation(updatedEdu);
  };

  const removeEducation = (index: number) => {
    const updatedEdu = [...education];
    updatedEdu.splice(index, 1);
    setEducation(updatedEdu);
  };

  const addEducation = () => {
    const updatedEdu = [
      ...education,
      {
        major: 'ENTER YOUR MAJOR',
        university: 'Name of your university / college',
      },
    ];
    setEducation(updatedEdu);
  };
  const getImage = async () => {
    const element = resumeRef.current as unknown as HTMLElement;
    element.onload = async () => {
      // console.log('Image loading success');
    };
    element.onerror = (error) => {
      console.error('Image loading error:', error);
    };
    if (!element) {
      console.error('Unable to capture content. The DOM element is null.');
      return;
    }
    try {
      const dataUrl = await htmlToImage.toJpeg(element);
      return dataUrl;
    } catch (error) {
      console.error('Oops, something went wrong!', (error as Error).message);
      return null;
    }
  };
  function base64ToBlob(base64: string, mime: string) {
    const byteString = atob(base64.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mime });
  }
  // 生成并下载 JPEG 文件
  const generateJpg = async () => {
    const base64 = await getImage();

    if (base64) {
      const mime = 'image/jpeg'; // 根据需要设置 MIME 类型
      const blob = base64ToBlob(base64, mime);
      saveAs(blob, 'resume.jpg');
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-start gap-4">
      <div className="w-full lg:w-[1200px] grid grid-cols-1 lg:grid-cols-12 px-6 lg:px-32">
        <div className="col-span-12 px-4 py-6">
          {/* 工具栏 保存、编辑和下载pdf、png、jpg、svg */}
          <div className="flex items-center justify-end w-full gap-12 mb-4">
            <div
              className="flex items-center justify-center gap-1 px-3 py-1 rounded-md bg-gray-200 cursor-pointer"
              onClick={toggleEditable}
            >
              {isEdit ? (
                <FaPenToSquare className="text-sm text-txtPrimary" />
              ) : (
                <FaPencil className="text-sm text-txtPrimary" />
              )}
              <p className="text-sm text-txtPrimary">Edit</p>
            </div>

            <div
              onClick={() => {
                toast.error('Invalid File Format');
              }}
              className="flex items-center justify-center gap-1 px-3 py-1 rounded-md bg-gray-200 cursor-pointer"
            >
              <BiSolidBookmarks className="text-sm text-txtPrimary" />
              <p className="text-sm text-txtPrimary">Save</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-sm text-txtPrimary">Download : </p>
              <div className="flex items-center justify-center gap-1 px-3 py-1 rounded-md bg-gray-200 cursor-pointer">
                <BsFiletypePdf className="text-sm text-txtPrimary" />
              </div>
              <div className="flex items-center justify-center gap-1 px-3 py-1 rounded-md bg-gray-200 cursor-pointer">
                <BsFiletypePng className="text-sm text-txtPrimary" />
              </div>
              <div className="flex items-center justify-center gap-1 px-3 py-1 rounded-md bg-gray-200 cursor-pointer">
                <BsFiletypeJpg onClick={generateJpg} className="text-sm text-txtPrimary" />
              </div>
              <div className="flex items-center justify-center gap-1 px-3 py-1 rounded-md bg-gray-200 cursor-pointer">
                <BsFiletypeSvg className="text-sm text-txtPrimary" />
              </div>
            </div>
          </div>
          {/* 简历主体*/}
          <div className="w-full h-auto grid grid-cols-12" ref={resumeRef}>
            {/* 头像 */}
            <div className="col-span-4 bg-black flex flex-col items-center justify-start">
              <div className="w-full h-80 bg-gray-300 flex items-center justify-center">
                {!imageAsset.imageURL ? (
                  <>
                    <label className=" w-full cursor-pointer h-full">
                      <div className="w-full flex flex-col items-center justify-center h-full">
                        <div className="w-full flex flex-col justify-center items-center cursor-pointer">
                          <Image isBlurred width={240} src="/assets/images/profile.png" alt="profile" />
                        </div>
                      </div>

                      {isEdit && (
                        <input type="file" className="w-0 h-0" accept=".jpeg,.jpg,.png" onChange={handleFileSelect} />
                      )}
                    </label>
                  </>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-md">
                    <Image src={imageAsset.imageURL} alt="uploaded image" isBlurred width={240}></Image>
                    {isEdit && (
                      <div
                        className="absolute top-4 z-10 right-4 w-8 h-8 rounded-md flex items-center justify-center bg-red-500 cursor-pointer"
                        onClick={deleteImageObject}
                      >
                        <FaTrash className="text-sm text-white" />
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="w-full flex flex-col items-center justify-start pl-8 mt-4 gap-6">
                <div className="w-full">
                  <p className="uppercase text-lg font-semibold text-gray-100">Education</p>
                  <div className="w-full h-[2px] bg-yellow-400 mt-2"></div>
                  <AnimatePresence>
                    {education &&
                      education?.map((edu, i) => (
                        <motion.div key={i} className="w-full pl-4 mt-3 relative">
                          <input
                            type="text"
                            readOnly
                            name="major"
                            value={edu.major}
                            onChange={(e) => handleEducationChange(i, e)}
                            className={`bg-transparent outline-none border-none text-sm font-semibold uppercase  text-gray-100  ${
                              isEdit && 'text-yellow-400 w-full'
                            }`}
                          />

                          <textarea
                            readOnly
                            className={`text-xs text-gray-200 mt-2  w-full  outline-none border-none ${
                              isEdit ? 'bg-[#1c1c1c]' : 'bg-transparent'
                            }`}
                            name="university"
                            value={edu.university}
                            onChange={(e) => handleEducationChange(i, e)}
                            rows={2}
                            style={{
                              maxHeight: 'auto',
                              minHeight: '40px',
                              resize: 'none',
                            }}
                          />
                          <AnimatePresence>
                            {isEdit && (
                              <motion.div
                                onClick={() => removeEducation(i)}
                                className="cursor-pointer absolute right-2 top-0"
                              >
                                <FaTrash className="text-sm text-gray-100" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>

                <AnimatePresence>
                  {isEdit && (
                    <motion.div onClick={addEducation} className="cursor-pointer">
                      <FaPlus className="text-base text-gray-100" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="w-full">
                  <p className="uppercase text-lg font-semibold text-gray-100">Reference</p>
                  <div className="w-full h-[2px] bg-yellow-400 mt-2"></div>
                  <div className="w-full pl-4 mt-3">
                    <input
                      value={formData.refererName}
                      onChange={handleChange}
                      name="refererName"
                      type="text"
                      readOnly
                      className={`bg-transparent outline-none border-none text-base tracking-widest capitalize text-gray-100 w-full ${
                        isEdit && 'bg-[#1c1c1c]'
                      }`}
                    />

                    <input
                      value={formData.refererRole}
                      onChange={handleChange}
                      name="refererRole"
                      type="text"
                      readOnly
                      className={`bg-transparent outline-none border-none text-xs capitalize text-gray-300 w-full ${
                        isEdit && 'bg-[#1c1c1c]'
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col items-start justify-start mt-6 gap-6">
                <div className="w-full grid grid-cols-12">
                  <div className="col-span-3 w-full h-6 bg-yellow-400"></div>
                  <div className="col-span-9">
                    <div className="w-full h-6 bg-[rgba(45,45,45,0.6)] px-3 flex items-center">
                      <p className="text-sm font-semibold text-gray-200">Phone</p>
                    </div>
                    <input
                      value={formData.mobile}
                      onChange={handleChange}
                      name="mobile"
                      type="text"
                      readOnly
                      className={`bg-transparent outline-none border-none text-xs px-3 mt-2 text-gray-200 w-full ${
                        isEdit && 'bg-[#1c1c1c]'
                      }`}
                    />
                  </div>
                </div>

                <div className="w-full grid grid-cols-12">
                  <div className="col-span-3 w-full h-6 bg-yellow-400"></div>
                  <div className="col-span-9">
                    <div className="w-full h-6 bg-[rgba(45,45,45,0.6)] px-3 flex items-center">
                      <p className="text-sm font-semibold text-gray-200">Email</p>
                    </div>
                    <input
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                      type="text"
                      readOnly
                      className={`bg-transparent outline-none border-none text-xs px-3 mt-2 text-gray-200 w-full ${
                        isEdit && 'bg-[#1c1c1c]'
                      }`}
                    />
                  </div>
                </div>

                <div className="w-full grid grid-cols-12">
                  <div className="col-span-3 w-full h-6 bg-yellow-400"></div>
                  <div className="col-span-9">
                    <div className="w-full h-6 bg-[rgba(45,45,45,0.6)] px-3 flex items-center">
                      <p className="text-sm font-semibold text-gray-200">Website</p>
                    </div>

                    <input
                      value={formData.website}
                      onChange={handleChange}
                      name="website"
                      type="text"
                      readOnly
                      className={`bg-transparent outline-none border-none text-xs px-3 mt-2 text-gray-200 w-full ${
                        isEdit && 'bg-[#1c1c1c]'
                      }`}
                    />
                  </div>
                </div>

                <div className="w-full grid grid-cols-12">
                  <div className="col-span-3 w-full h-6 bg-yellow-400"></div>
                  <div className="col-span-9">
                    <div className="w-full h-6 bg-[rgba(45,45,45,0.6)] px-3 flex items-center">
                      <p className="text-sm font-semibold text-gray-200">Address</p>
                    </div>

                    <textarea
                      readOnly
                      className={`text-xs text-gray-200 mt-2 px-3  w-full  outline-none border-none ${
                        isEdit ? 'bg-[#1c1c1c]' : 'bg-transparent'
                      }`}
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={2}
                      style={{
                        maxHeight: 'auto',
                        minHeight: '40px',
                        resize: 'none',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-8 flex flex-col items-center justify-start py-6 bg-white">
              <div className="w-full py-6"></div>
              {/* 标题 */}
              <div className="w-full px-8 py-6 bg-yellow-500">
                <div className="flex items-center justify-start ">
                  <input
                    type="text"
                    readOnly
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    className={`bg-transparent outline-none border-none text-3xl font-sans uppercase tracking-wider text-txtDark font-extrabold ${
                      isEdit && 'text-white w-full'
                    }`}
                  />
                </div>

                <input
                  value={formData.professionalTitle}
                  onChange={handleChange}
                  name="professionalTitle"
                  type="text"
                  readOnly
                  className={`bg-transparent outline-none border-none text-xl tracking-widest uppercase text-txtPrimary w-full ${
                    isEdit && 'text-white'
                  }`}
                />
              </div>

              <div className="w-full px-8 py-6 flex flex-col items-start justify-start gap-6">
                <div className="w-full">
                  <p className="uppercase text-xl tracking-wider">About Me</p>
                  <div className="w-full h-1 bg-txtDark my-3"></div>
                  <textarea
                    readOnly
                    className={`text-base text-txtPrimary tracking-wider w-full  outline-none border-none ${
                      isEdit ? 'bg-gray-200' : 'bg-transparent'
                    }`}
                    name="personalDescription"
                    value={formData.personalDescription}
                    onChange={handleChange}
                    rows={4}
                    style={{
                      minHeight: '100px',
                      width: '100%',
                      height: '100px',
                      resize: 'none',
                    }}
                  />
                </div>

                <div className="w-full">
                  <p className="uppercase text-xl tracking-wider">Work Experience</p>
                  <div className="w-full h-1 bg-txtDark my-3"></div>
                  <div className="w-full flex flex-col items-center justify-start gap-4">
                    <AnimatePresence>
                      {experiences &&
                        experiences?.map((exp, i) => (
                          <motion.div className="w-full grid grid-cols-12" key={i}>
                            <div className="col-span-4">
                              <input
                                value={exp.year}
                                onChange={(e) => handleExpChange(i, e)}
                                name="year"
                                type="text"
                                readOnly
                                className={` outline-none border-none text-base tracking-eide uppercase text-txtDark w-full ${
                                  isEdit ? 'bg-gray-200' : 'bg-transparent'
                                }`}
                              />
                            </div>
                            <div className="col-span-8 relative">
                              <AnimatePresence>
                                {isEdit && (
                                  <motion.div
                                    onClick={() => removeExperience(i)}
                                    className="cursor-pointer absolute right-0 top-2"
                                  >
                                    <FaTrash className="text-base text-txtPrimary" />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              <input
                                value={exp.title}
                                onChange={(e) => handleExpChange(i, e)}
                                name="title"
                                type="text"
                                readOnly
                                className={` outline-none border-none font-sans text-lg tracking-wide capitalize text-txtDark w-full ${
                                  isEdit ? 'bg-gray-200' : 'bg-transparent'
                                }`}
                              />

                              <input
                                value={exp.companyAndLocation}
                                onChange={(e) => handleExpChange(i, e)}
                                name="companyAndLocation"
                                type="text"
                                readOnly
                                className={` outline-none border-none text-sm tracking-wide capitalize text-txtPrimary w-full ${
                                  isEdit ? 'bg-gray-200' : 'bg-transparent'
                                }`}
                              />

                              <textarea
                                readOnly
                                className={`text-xs mt-4  text-txtPrimary tracking-wider w-full  outline-none border-none ${
                                  isEdit ? 'bg-gray-200' : 'bg-transparent'
                                }`}
                                name="description"
                                value={exp.description}
                                onChange={(e) => handleExpChange(i, e)}
                                rows={3}
                                style={{
                                  maxHeight: 'auto',
                                  minHeight: '60px',
                                  resize: 'none',
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                    </AnimatePresence>
                    <AnimatePresence>
                      {isEdit && (
                        <motion.div onClick={addExperience} className="cursor-pointer">
                          <FaPlus className="text-base text-txtPrimary" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="w-full">
                  <p className="uppercase text-xl tracking-wider">Skills</p>
                  <div className="w-full h-1 bg-txtDark my-3"></div>
                  <div className="w-full flex flex-wrap items-center justify-start gap-4">
                    <AnimatePresence>
                      {skills &&
                        skills?.map((skill, i) => (
                          <motion.div key={i} className="flex-1" style={{ minWidth: 225 }}>
                            <div className="w-full flex items-center justify-between">
                              <div className="flex items-center justify-center">
                                <input
                                  value={skill.title}
                                  onChange={(e) => handleSkillsChange(i, e)}
                                  name="title"
                                  type="text"
                                  readOnly
                                  className={` outline-none border-none text-base tracking-wide capitalize font-semibold text-txtPrimary w-full ${
                                    isEdit ? 'bg-gray-200' : 'bg-transparent'
                                  }`}
                                />

                                <AnimatePresence>
                                  {isEdit && (
                                    <motion.input
                                      value={skill.percentage}
                                      onChange={(e) => handleSkillsChange(i, e)}
                                      name="percentage"
                                      type="text"
                                      className={` outline-none border-none text-base tracking-wide capitalize font-semibold text-txtPrimary w-full ${
                                        isEdit ? 'bg-gray-200' : 'bg-transparent'
                                      }`}
                                    />
                                  )}
                                </AnimatePresence>
                              </div>

                              <AnimatePresence>
                                {isEdit && (
                                  <motion.div onClick={() => removeSkill(i)} className="cursor-pointer ">
                                    <FaTrash className="text-base text-txtPrimary" />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                            <div className="relative mt-2 w-full h-1 rounded-md bg-gray-400">
                              <div
                                className="h-full rounded-md bg-gray-600"
                                style={{
                                  width: `${skill.percentage}%`,
                                  transition: 'width 0.3s ease',
                                }}
                              ></div>
                            </div>
                          </motion.div>
                        ))}
                    </AnimatePresence>
                  </div>
                  <AnimatePresence>
                    {isEdit && (
                      <div className="w-full  flex items-center justify-center py-4">
                        <motion.div onClick={addSkill} className="cursor-pointer">
                          <FaPlus className="text-base text-txtPrimary" />
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
