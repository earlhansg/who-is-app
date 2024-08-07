// lib
import { Request, Response } from "express";
import axios from "axios";
// util
import { formatHostnames } from "../utility/format-hostnames";

export async function fetchDomain(
  req: Request,
  res: Response
): Promise<Response> {
  const { domainName, type } = req.body;
  if (!domainName || !type) {
    return res.status(400).json({ error: "Domain name and type are required" });
  }
  try {
    const response = await axios.get(
      `https://www.whoisxmlapi.com/whoisserver/WhoisService`,
      {
        params: {
          apiKey: process.env.API_KEY,
          domainName,
          outputFormat: "JSON",
        },
      }
    );

    const whoisData = response.data.WhoisRecord;

    if (type === "domain") {
      const domainInfo = {
        domainName: whoisData.domainName,
        registrarName: whoisData.registrarName,
        registrationDate: whoisData.createdDate,
        expirationDate: whoisData.expiresDate,
        estimatedDomainAge: whoisData.estimatedDomainAge,
        hostnames: formatHostnames(whoisData.nameServers?.hostNames?.join(", ") || "")
      };
      return res.json(domainInfo);
    } else if (type === "contact") {
      const contactInfo = {
        registrantName: whoisData.registrant?.organization || "",
        technicalContactName: whoisData.technicalContact?.organization || "",
        administrativeContactName:
          whoisData.administrativeContact?.organization || "",
        contactEmail: whoisData.contactEmail || "",
      };
      return res.json(contactInfo);
    } else {
      return res.status(400).json({ error: "Invalid type requested" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch WHOIS data" });
  }
}
