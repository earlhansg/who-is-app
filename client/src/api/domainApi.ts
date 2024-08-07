import { axiosInstance } from "./axiosInstance";
// models 
import { ContactInformation } from "@models/contact-information.model";
import { DomainInformation } from "@models/domain-information.model";

export const fetchDomain = async (filterType: object): Promise<ContactInformation | DomainInformation> => {
  const response = await axiosInstance.post<ContactInformation | DomainInformation>("/domain", filterType);
  return response.data;
};
