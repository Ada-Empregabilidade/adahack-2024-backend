import { candidateService, candidateServiceClass } from '../services/candidate.service';
import { prisma } from '../client';
import { ICandidateFilter, ICandidateCreate } from '../interface/candidate.interface';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  getCandidateNewFilterServices,
  candidateCreateService,
} from '../services/candidate.service';

const candidateController = {

  importCandidates: async (req: any, res: any) => {
    try {
      await candidateService.importCandidates(req);
      res.send({ message: 'Candidates imported successfully' });
    } catch (error) {
      res.status(500).send({ message: 'Error importing candidates' });
    }
  }
};


export const CandidateList = async (req: Request, res: Response) => {
  try {
    const response = await prisma.candidatos.findMany();
    return res.status(StatusCodes.OK).json(response);
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Failed to list candidates', message: error.message });
  }
};

export const candidateCreateConrtoller = async (req: Request, res: Response) => {
  try {
    const data: ICandidateCreate = req.body;

    if (!data.infos_tecnicas) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid data' });
    }

    const response = await candidateServiceClass.execute(data);

    if (!response) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed send data for service' });
    }

    return res.status(StatusCodes.CREATED).json(response);
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'Failed create candidate', validator: error.errors });
  }
};

export const candidateNewFilterController = async (req: Request, res: Response) => {
  try {
    const data: ICandidateFilter = req.body;

    const response = await getCandidateNewFilterServices(data);

    return res.status(StatusCodes.OK).json(response);
  } catch (error: any) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'failure to filter candidates', validator: error.errors });
  }
};

export default candidateController;
